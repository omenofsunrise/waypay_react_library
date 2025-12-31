import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import CustomInput from '../inputs/CustomInput';

declare global {
  interface Window {
    ymaps?: any;
  }
}

const DEFAULT_CONTROLS = ['zoomControl', 'fullscreenControl'];
let ymapsPromise: Promise<any> | null = null;

const loadYandexMaps = (apiKey?: string) => {
  if (typeof window === 'undefined') return Promise.reject(new Error('Window is not available'));
  if (window.ymaps) return Promise.resolve(window.ymaps);
  if (!ymapsPromise) {
    ymapsPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      const keyParam = apiKey ? `&apikey=${apiKey}` : '';
      script.src = `https://api-maps.yandex.ru/2.1/?lang=ru_RU${keyParam}`;
      script.async = true;
      script.onload = () => {
        if (window.ymaps) {
          window.ymaps.ready(() => resolve(window.ymaps));
        } else {
          reject(new Error('Yandex Maps failed to load'));
        }
      };
      script.onerror = () => reject(new Error('Failed to load Yandex Maps script'));
      document.head.appendChild(script);
    });
  }
  return ymapsPromise;
};

export interface YandexMapSelectorProps {
  onLocationSelect: (address: string, lat: number, lon: number) => void;
  initialAddress?: string;
  initialLat?: number;
  initialLon?: number;
  apiKey?: string;
  zoom?: number;
  height?: number | string;
  width?: number | string;
  inputPlaceholder?: string;
  searchButtonLabel?: string;
  draggablePlacemark?: boolean;
  controls?: string[];
  showSearch?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onError?: (error: Error) => void;
}

const YandexMapSelector: React.FC<YandexMapSelectorProps> = ({
  onLocationSelect,
  initialAddress = '',
  initialLat = 55.751244,
  initialLon = 37.618423,
  apiKey,
  zoom = 12,
  height = 400,
  width = '100%',
  inputPlaceholder = 'Введите адрес или название места',
  searchButtonLabel = 'Найти',
  draggablePlacemark = true,
  controls = DEFAULT_CONTROLS,
  showSearch = true,
  className,
  style,
  onError,
}) => {
  const [mapInstance, setMapInstance] = useState<any>(null);
  const [placemarkInstance, setPlacemarkInstance] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState(initialAddress);
  const [selectedAddress, setSelectedAddress] = useState(initialAddress);
  const [isLoaded, setIsLoaded] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let destroyed = false;
    let localMap: any;

    const initMap = async () => {
      try {
        const ymaps = await loadYandexMaps(apiKey);
        if (destroyed || !mapContainerRef.current) return;

        localMap = new ymaps.Map(mapContainerRef.current, {
          center: [initialLat, initialLon],
          zoom,
          controls,
        });

        const placemark = new ymaps.Placemark([initialLat, initialLon], {}, { draggable: draggablePlacemark });
        localMap.geoObjects.add(placemark);

        localMap.events.add('click', (e: any) => {
          const coords = e.get('coords');
          updateLocation(coords, placemark, localMap);
        });

        placemark.events.add('dragend', () => {
          const coords = placemark.geometry.getCoordinates();
          updateLocation(coords, placemark, localMap);
        });

        setMapInstance(localMap);
        setPlacemarkInstance(placemark);
        setIsLoaded(true);
      } catch (error) {
        if (onError && error instanceof Error) {
          onError(error);
        }
      }
    };

    initMap();

    return () => {
      destroyed = true;
      if (localMap) {
        localMap.destroy();
      }
    };
  }, [apiKey, initialLat, initialLon, zoom, controls, draggablePlacemark, onError]);

  const updateLocation = async (coords: number[], placemark: any, map: any) => {
    if (!window.ymaps) return;
    try {
      const response = await window.ymaps.geocode(coords);
      const firstGeoObject = response.geoObjects.get(0);
      const address = firstGeoObject.getAddressLine();

      placemark.geometry.setCoordinates(coords);
      map.panTo(coords, { flying: true });

      setSelectedAddress(address);
      setSearchQuery(address);
      onLocationSelect(address, coords[0], coords[1]);
    } catch (error) {
      if (onError && error instanceof Error) {
        onError(error);
      }
    }
  };

  const handleSearch = async () => {
    if (!searchQuery.trim() || !window.ymaps || !mapInstance) return;

    try {
      const response = await window.ymaps.geocode(searchQuery);
      const firstGeoObject = response.geoObjects.get(0);

      if (firstGeoObject) {
        const coords = firstGeoObject.geometry.getCoordinates();
        const bounds = firstGeoObject.properties.get('boundedBy');

        mapInstance.setBounds(bounds, { checkZoomRange: true });

        const newPlacemark = new window.ymaps.Placemark(coords, {}, { draggable: draggablePlacemark });
        mapInstance.geoObjects.removeAll();
        mapInstance.geoObjects.add(newPlacemark);

        setPlacemarkInstance(newPlacemark);

        const address = firstGeoObject.getAddressLine();
        setSelectedAddress(address);
        onLocationSelect(address, coords[0], coords[1]);

        newPlacemark.events.add('dragend', () => {
          const dragCoords = newPlacemark.geometry.getCoordinates();
          updateLocation(dragCoords, newPlacemark, mapInstance);
        });
      }
    } catch (error) {
      if (onError && error instanceof Error) {
        onError(error);
      }
    }
  };

  return (
    <MapContainer className={className} style={style}>
      {showSearch && (
        <SearchContainer>
          <CustomInput
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={inputPlaceholder}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            disabled={!isLoaded}
          />
          <SearchButton onClick={handleSearch} disabled={!isLoaded}>
            {searchButtonLabel}
          </SearchButton>
        </SearchContainer>
      )}

      <MapInfo>
        Выбранный адрес: <strong>{selectedAddress || 'Не выбран'}</strong>
      </MapInfo>

      <MapElement ref={mapContainerRef} $height={height} $width={width} />

      <Instructions>📍 Кликните на карте или найдите адрес через поиск</Instructions>
    </MapContainer>
  );
};

export default YandexMapSelector;

const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SearchContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const SearchButton = styled.button<{ disabled?: boolean }>`
  padding: 8px 16px;
  background-color: #007d88;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

const MapElement = styled.div<{ $height: number | string; $width: number | string }>`
  width: ${({ $width }) => (typeof $width === 'number' ? `${$width}px` : $width)};
  height: ${({ $height }) => (typeof $height === 'number' ? `${$height}px` : $height)};
  border-radius: 8px;
  overflow: hidden;
`;

const MapInfo = styled.div`
  font-size: 14px;
  color: #374151;
`;

const Instructions = styled.div`
  font-size: 12px;
  color: #6b7280;
  text-align: center;
`;
