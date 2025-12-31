import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import TitleField from '../inputs/TitleField';
import CustomTitle from '../inputs/CustomTitle';

interface PointData {
  x: number;
  y: number;
  color: string;
  label?: string;
  value?: number;
  name?: string;
}

interface ScatterPlotProps {
  title: string;
  data: PointData[];
  xAxisLabel: string;
  yAxisLabel: string;
  maxX: number;
  maxY: number;
  minY: number;
  xStep: number;
  yStep: number;
  height?: number | string;
  showLegend?: boolean;
  xAxisCustomLabels?: string[];
  showTooltip?: boolean;
  titleFontSize?: string;
}

const fadeIn = keyframes`
  from { opacity: 0; transform: translate(-50%, -110%); }
  to { opacity: 1; transform: translate(-50%, -100%); }
`;

const ScatterPlot: React.FC<ScatterPlotProps> = ({
  title,
  data,
  xAxisLabel,
  yAxisLabel,
  maxX,
  maxY,
  minY,
  xStep,
  yStep,
  height = 300,
  showLegend = true,
  xAxisCustomLabels,
  showTooltip = true,
  titleFontSize = '30px',
}) => {
  const [hoveredPoint, setHoveredPoint] = useState<PointData | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const tooltipRef = useRef<HTMLDivElement>(null);
  const plotAreaRef = useRef<HTMLDivElement>(null);

  const actualMaxX = Math.max(...data.map((point) => point.x), maxX);

  const xAxisValues: number[] = [];
  for (let i = 0; i <= actualMaxX; i += xStep) {
    xAxisValues.push(i);
  }

  const yAxisValues: number[] = [];
  for (let i = minY; i <= maxY; i += yStep) {
    yAxisValues.push(i);
  }

  const xLabels = xAxisCustomLabels || xAxisValues.map((v) => v.toString());

  const legendItems = showLegend
    ? Array.from(new Set(data.filter((point) => point.label).map((point) => point.label))).map((label) => {
        const point = data.find((p) => p.label === label)!;
        return { name: label, color: point.color };
      })
    : [];

  const groupedData: Record<string, PointData[]> = {};
  data.forEach((point) => {
    const label = point.label || 'default';
    if (!groupedData[label]) {
      groupedData[label] = [];
    }
    groupedData[label].push(point);
  });

  const calculateXPosition = (x: number) => {
    return (x / actualMaxX) * 100;
  };

  const calculateYPosition = (y: number) => {
    const range = maxY - minY;
    return 100 - ((y - minY) / range) * 100;
  };

  useEffect(() => {
    if (hoveredPoint && plotAreaRef.current) {
      const plotRect = plotAreaRef.current.getBoundingClientRect();
      const x = (calculateXPosition(hoveredPoint.x) / 100) * plotRect.width;
      const y = (calculateYPosition(hoveredPoint.y) / 100) * plotRect.height;

      setTooltipPosition({
        x: x + plotRect.left,
        y: y + plotRect.top,
      });
    }
  }, [hoveredPoint, maxX, maxY, minY]);

  return (
    <ChartContainer>
      <TitleField style={{ marginTop: '0' }}>
        <CustomTitle style={{ fontSize: titleFontSize }}>{title}</CustomTitle>
        {showLegend && legendItems.length > 0 && (
          <Legend>
            {legendItems.map((item, index) => (
              <LegendItem key={index}>
                <LegendLine color={item.color} />
                <LegendText>{item.name}</LegendText>
              </LegendItem>
            ))}
          </Legend>
        )}
      </TitleField>

      <ChartContent height={height}>
        <YAxis>
          {yAxisValues.map((value, index) => (
            <YAxisLabel key={index}>{value.toLocaleString()}</YAxisLabel>
          ))}
          <AxisTitle>{yAxisLabel}</AxisTitle>
        </YAxis>

        <PlotArea ref={plotAreaRef}>
          {yAxisValues.map((value, index) => (
            <HorizontalLine key={`hline-${index}`} position={calculateYPosition(value)} />
          ))}

          {Object.values(groupedData).map((group, groupIndex) => {
            return group.map((point, index) => {
              if (index === 0) return null;

              const prevPoint = group[index - 1];
              const x1 = calculateXPosition(prevPoint.x);
              const y1 = calculateYPosition(prevPoint.y);
              const x2 = calculateXPosition(point.x);
              const y2 = calculateYPosition(point.y);

              return (
                <svg
                  key={`line-${groupIndex}-${index}`}
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}
                >
                  <line x1={`${x1}%`} y1={`${y1}%`} x2={`${x2}%`} y2={`${y2}%`} stroke={point.color} strokeWidth="1" />
                </svg>
              );
            });
          })}

          {data.map((point, index) => (
            <Point
              key={index}
              x={calculateXPosition(point.x)}
              y={calculateYPosition(point.y)}
              color={point.color}
              onMouseEnter={() => setHoveredPoint(point)}
              onMouseLeave={() => setHoveredPoint(null)}
              isHovered={hoveredPoint?.label === point.label}
            />
          ))}
        </PlotArea>
      </ChartContent>

      {showTooltip && hoveredPoint && (
        <TooltipWrapper ref={tooltipRef} style={{ left: tooltipPosition.x, top: tooltipPosition.y }}>
          <TooltipContent>
            {hoveredPoint.name && <TooltipTitle>{hoveredPoint.name}</TooltipTitle>}
            <TooltipItem>{hoveredPoint.y.toLocaleString()}</TooltipItem>
          </TooltipContent>
          <TooltipArrow />
        </TooltipWrapper>
      )}

      <XAxis>
        {xLabels.map((label, index) => {
          const value = xAxisValues[index];
          const position = (value / actualMaxX) * 100;
          return (
            <XAxisLabel key={index} style={{ left: `${position}%`, transform: 'translateX(-50%)' }}>
              {label}
            </XAxisLabel>
          );
        })}
        {xAxisLabel && <AxisTitle>{xAxisLabel}</AxisTitle>}
      </XAxis>
    </ChartContainer>
  );
};

const ChartContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 20px;
  position: relative;
  font-family: 'Inter', sans-serif;
  height: auto;
`;

const Legend = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  flex-wrap: wrap;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LegendLine = styled.div<{ color: string }>`
  width: 16px;
  height: 2px;
  background-color: ${(props) => props.color};
`;

const LegendText = styled.span`
  font-size: 14px;
  color: #4b5563;
`;

const ChartContent = styled.div<{ height?: number | string }>`
  display: flex;
  height: ${(props) => (typeof props.height === 'number' ? `${props.height}px` : props.height || '300px')};
  position: relative;
`;

const YAxis = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  margin-right: 10px;
  min-width: 40px;
`;

const YAxisLabel = styled.span`
  font-size: 12px;
  color: #6b7280;
`;

const AxisTitle = styled.div`
  font-size: 12px;
  color: #6b7280;
  text-align: center;
  margin-top: 10px;
`;

const PlotArea = styled.div`
  position: relative;
  flex-grow: 1;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: rgba(209, 213, 219, 1);
`;

const HorizontalLine = styled.div<{ position: number }>`
  position: absolute;
  top: ${(props) => props.position}%;
  left: 0;
  right: 0;
  height: 1px;
  background: repeating-linear-gradient(
    to right,
    rgba(209, 213, 219, 1),
    rgba(209, 213, 219, 1) 2px,
    transparent 2px,
    transparent 4px
  );
  z-index: 0;
`;

const Point = styled.div<{ x: number; y: number; color: string; isHovered: boolean }>`
  position: absolute;
  left: ${(props) => props.x}%;
  top: ${(props) => props.y}%;
  width: ${(props) => (props.isHovered ? '8px' : '6px')};
  height: ${(props) => (props.isHovered ? '8px' : '6px')};
  background-color: ${(props) => props.color};
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    width: 12px;
    height: 12px;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.8);
  }
`;

const XAxis = styled.div`
  position: relative;
  height: 20px;
  margin-top: 10px;
  margin-left: 40px;
`;

const XAxisLabel = styled.span`
  font-size: 12px;
  color: #6b7280;
  position: absolute;
`;

const TooltipWrapper = styled.div`
  position: fixed;
  transform: translate(-50%, -100%);
  z-index: 100;
  pointer-events: none;
  animation: ${fadeIn} 0.15s ease-out forwards;
`;

const TooltipContent = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

const TooltipTitle = styled.div`
  font-weight: 600;
  margin-bottom: 6px;
  color: #fff;
`;

const TooltipItem = styled.div`
  margin-bottom: 2px;
  color: rgba(255, 255, 255, 0.9);
`;

const TooltipArrow = styled.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid rgba(0, 0, 0, 0.9);
`;

export default ScatterPlot;
