import React, { useCallback, useState } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';

interface GoogleMapProps {
  center: google.maps.LatLngLiteral;
  zoom: number;
  className?: string;
  markerTitle?: string;
  markerInfo?: string;
}

const MapComponent: React.FC<{
  center: google.maps.LatLngLiteral;
  zoom: number;
  markerTitle?: string;
  markerInfo?: string;
}> = ({ center, zoom, markerTitle, markerInfo }) => {
  const [map, setMap] = useState<google.maps.Map>();
  const [marker, setMarker] = useState<google.maps.Marker>();
  const [infoWindow, setInfoWindow] = useState<google.maps.InfoWindow>();

  const ref = useCallback((node: HTMLDivElement | null) => {
    if (node !== null && !map) {
      const newMap = new window.google.maps.Map(node, {
        center,
        zoom,
        styles: [
          {
            featureType: 'all',
            elementType: 'geometry.fill',
            stylers: [{ weight: '2.00' }]
          },
          {
            featureType: 'all',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#9c9c9c' }]
          },
          {
            featureType: 'all',
            elementType: 'labels.text',
            stylers: [{ visibility: 'on' }]
          }
        ]
      });
      setMap(newMap);

      // Add marker
      const newMarker = new window.google.maps.Marker({
        position: center,
        map: newMap,
        title: markerTitle || 'Our Location',
        animation: google.maps.Animation.DROP,
      });
      setMarker(newMarker);

      // Add info window
      if (markerInfo) {
        const newInfoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="padding: 10px; max-width: 200px;">
              <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">${markerTitle || 'Our Location'}</h3>
              <p style="margin: 0; font-size: 14px; line-height: 1.4;">${markerInfo}</p>
            </div>
          `
        });
        setInfoWindow(newInfoWindow);

        newMarker.addListener('click', () => {
          newInfoWindow.open(newMap, newMarker);
        });
      }
    }
  }, [center, zoom, markerTitle, markerInfo, map]);

  return <div ref={ref} className="w-full h-full" />;
};

const LoadingComponent: React.FC = () => (
  <div className="w-full h-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-700">
    <div className="text-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500 mx-auto mb-2"></div>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm">Loading map...</p>
    </div>
  </div>
);

const ErrorComponent: React.FC<{ status: Status }> = ({ status }) => (
  <div className="w-full h-full flex items-center justify-center bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
    <div className="text-center p-4">
      <svg 
        className="h-8 w-8 text-red-500 mx-auto mb-2" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" 
        />
      </svg>
      <h3 className="text-sm font-medium text-red-800 dark:text-red-200 mb-1">
        Failed to load map
      </h3>
      <p className="text-xs text-red-600 dark:text-red-400">
        Status: {status}
      </p>
      <p className="text-xs text-red-600 dark:text-red-400 mt-1">
        Please check your API key and internet connection
      </p>
    </div>
  </div>
);

const GoogleMap: React.FC<GoogleMapProps> = ({ 
  center, 
  zoom, 
  className = "",
  markerTitle,
  markerInfo
}) => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return (
      <div className={`w-full h-full flex items-center justify-center bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg ${className}`}>
        <div className="text-center p-4">
          <svg 
            className="h-8 w-8 text-yellow-500 mx-auto mb-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" 
            />
          </svg>
          <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-200 mb-1">
            Google Maps API Key Required
          </h3>
          <p className="text-xs text-yellow-600 dark:text-yellow-400">
            Please add VITE_GOOGLE_MAPS_API_KEY to your .env file
          </p>
        </div>
      </div>
    );
  }

  const render = (status: Status) => {
    switch (status) {
      case Status.LOADING:
        return <LoadingComponent />;
      case Status.FAILURE:
        return <ErrorComponent status={status} />;
      case Status.SUCCESS:
        return (
          <MapComponent 
            center={center} 
            zoom={zoom} 
            markerTitle={markerTitle}
            markerInfo={markerInfo}
          />
        );
    }
  };

  return (
    <div className={`w-full h-full ${className}`}>
      <Wrapper apiKey={apiKey} render={render} />
    </div>
  );
};

export default GoogleMap;