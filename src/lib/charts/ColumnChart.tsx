import React, { useState } from 'react';
import styled from 'styled-components';
import TitleField from '../inputs/TitleField';
import CustomTitle from '../inputs/CustomTitle';
import { formatMoney } from '../utils/money';

interface BarData {
  name: string;
  value: number;
  color: string;
}

interface ChartData {
  label: string;
  total: number;
  bars: BarData[];
}

interface ColumnChartProps {
  title: string;
  data: ChartData[];
  maxValue: number;
  step: number;
  height?: number | string;
  titleFontSize?: number | string;
}

const ColumnChart: React.FC<ColumnChartProps> = ({ title, data, maxValue, step, height = 300, titleFontSize }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const yAxisValues: number[] = [];
  for (let i = 0; i <= maxValue; i += step) {
    yAxisValues.push(i);
  }

  const legendItems = data.length > 0 ? data[0].bars.map((bar) => ({ name: bar.name, color: bar.color })) : [];

  return (
    <ChartContainer>
      <TitleField style={{ marginTop: '0' }}>
        <CustomTitle style={{ fontSize: titleFontSize }}>{title}</CustomTitle>
        <Legend>
          {legendItems.map((item, index) => (
            <LegendItem key={index}>
              <LegendColor color={item.color} />
              <LegendText>{item.name}</LegendText>
            </LegendItem>
          ))}
        </Legend>
      </TitleField>

      <ChartContent height={height}>
        <YAxis>
          {yAxisValues.map((value, index) => (
            <YAxisLabel key={index}>{value.toLocaleString()}</YAxisLabel>
          ))}
        </YAxis>

        <ChartBarsWrapper>
          <BarsContainer>
            {yAxisValues.map((value, index) => {
              const positionPercentage = (value / maxValue) * 100;
              return <HorizontalLine key={`line-${index}`} position={100 - positionPercentage} />;
            })}

            {data.map((item, index) => (
              <BarGroup key={index} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                {item.bars.map((bar, barIndex) => {
                  const nextValuesSum = item.bars.slice(barIndex + 1).reduce((sum, b) => sum + b.value, 0);

                  return (
                    <StackedBar
                      key={barIndex}
                      height={(bar.value / maxValue) * 100}
                      offset={(nextValuesSum / maxValue) * 100}
                      color={bar.color}
                      isHovered={hoveredIndex !== null && hoveredIndex !== index}
                    />
                  );
                })}

                {hoveredIndex === index && (
                  <Tooltip>
                    <TooltipContent>
                      <TooltipTitle>Всего: {formatMoney(item.total.toString())}</TooltipTitle>
                      {item.bars.map((bar, barIndex) => (
                        <TooltipItem key={barIndex}>
                          {bar.name}: {formatMoney(bar.value.toString())}
                        </TooltipItem>
                      ))}
                    </TooltipContent>
                    <TooltipArrow />
                  </Tooltip>
                )}
              </BarGroup>
            ))}
          </BarsContainer>

          <XAxis>
            {data.map((item, index) => (
              <XAxisLabel key={index} style={{ flex: 1, textAlign: 'center' }}>
                {item.label}
              </XAxisLabel>
            ))}
          </XAxis>
        </ChartBarsWrapper>
      </ChartContent>
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
  margin-bottom: 20px;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LegendColor = styled.div<{ color: string }>`
  width: 16px;
  height: 16px;
  background-color: ${(props) => props.color};
  border-radius: 4px;
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
`;

const YAxisLabel = styled.span`
  font-size: 12px;
  color: #6b7280;
`;

const ChartBarsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
`;

const BarsContainer = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: flex-end;
  gap: 20px;
  padding: 20px 20px 0 20px;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: rgba(209, 213, 219, 1);
  position: relative;
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

const BarGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 2px;
  flex: 1;
  min-width: 0;
  position: relative;
  height: 100%;
  margin-bottom: 2px;
  z-index: 1;
`;

const StackedBar = styled.div<{ height: number; offset: number; color: string; isHovered: boolean }>`
  position: relative;
  width: 100%;
  height: ${(props) => Math.max(0, props.height)}%;
  margin-top: ${(props) => Math.max(0, props.offset)}%;
  background-color: ${(props) => (props.isHovered ? `color-mix(in srgb, ${props.color} 40%, #E5E7EB)` : props.color)};
  border-radius: 4px;
  transition: background-color 0.2s ease;
  max-width: 50px;
`;

const XAxis = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 10px;
`;

const XAxisLabel = styled.span`
  font-size: 12px;
  color: #6b7280;
  flex: 1;
  text-align: center;
`;

const Tooltip = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  margin-bottom: 10px;
`;

const TooltipContent = styled.div`
  background-color: #000;
  color: white;
  padding: 12px;
  border-radius: 10px;
  font-size: 14px;
  white-space: nowrap;
`;

const TooltipTitle = styled.div`
  font-weight: 600;
  margin-bottom: 6px;
`;

const TooltipItem = styled.div`
  margin-bottom: 2px;
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
  border-top: 6px solid #000;
`;

export default ColumnChart;
