'use client';

import { useEffect, useRef, useState } from 'react';
import { MapPoint } from '@/data/types';
import { useLanguage } from '@/lib/LanguageContext';
import { t } from '@/data/translations';

interface MapSectionProps {
  mapPoints: MapPoint[];
  activeMapPointId?: string;
}

export default function MapSection({ mapPoints, activeMapPointId }: MapSectionProps) {
  const { language } = useLanguage();
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const [markers, setMarkers] = useState<Map<string, any>>(new Map());

  useEffect(() => {
    // Dynamically import Leaflet only on client side
    if (typeof window !== 'undefined' && mapRef.current && !map) {
      import('leaflet').then((L) => {
        // Create map centered on Cyprus
        const mapInstance = L.map(mapRef.current!, {
          center: [35.0, 33.0],
          zoom: 9,
          scrollWheelZoom: false,
        });

        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 19,
        }).addTo(mapInstance);

        setMap(mapInstance);

        // Add markers
        const newMarkers = new Map();
        mapPoints.forEach((point) => {
          const marker = L.marker(point.coordinates, {
            title: point.name[language],
          }).addTo(mapInstance);

          // Create popup content
          const popupContent = `
            <div class="p-2">
              <h3 class="font-semibold text-base mb-1">${point.name[language]}</h3>
              <p class="text-sm text-gray-600">${point.description[language]}</p>
            </div>
          `;
          
          marker.bindPopup(popupContent);
          newMarkers.set(point.id, marker);
        });

        setMarkers(newMarkers);
      });
    }

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []); // Only run once on mount

  // Handle active marker
  useEffect(() => {
    if (activeMapPointId && markers.has(activeMapPointId)) {
      const marker = markers.get(activeMapPointId);
      marker.openPopup();
      
      // Pan to marker
      if (map) {
        map.setView(marker.getLatLng(), 11, {
          animate: true,
          duration: 1,
        });
      }
    }
  }, [activeMapPointId, markers, map]);

  // Update popup language when language changes
  useEffect(() => {
    if (markers.size > 0) {
      markers.forEach((marker, pointId) => {
        const point = mapPoints.find(p => p.id === pointId);
        if (point) {
          const popupContent = `
            <div class="p-2">
              <h3 class="font-semibold text-base mb-1">${point.name[language]}</h3>
              <p class="text-sm text-gray-600">${point.description[language]}</p>
            </div>
          `;
          marker.getPopup().setContent(popupContent);
        }
      });
    }
  }, [language, markers, mapPoints]);

  return (
    <section className="py-12 bg-white" id="map">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-playfair font-semibold mb-8 text-gray-900">
          {t('map', language)}
        </h2>
        
        <div 
          ref={mapRef} 
          className="h-[600px] rounded-lg shadow-lg border border-gray-200"
          style={{ zIndex: 1 }}
        />
        
        {/* Map Legend */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mapPoints.map((point) => (
            <div 
              key={point.id}
              className={`p-4 rounded-lg border transition-all cursor-pointer hover:shadow-md ${
                activeMapPointId === point.id 
                  ? 'border-gray-900 bg-gray-50' 
                  : 'border-gray-200 bg-white'
              }`}
              onClick={() => {
                const marker = markers.get(point.id);
                if (marker && map) {
                  marker.openPopup();
                  map.setView(marker.getLatLng(), 11, { animate: true });
                }
              }}
            >
              <h3 className="font-semibold text-sm mb-1">{point.name[language]}</h3>
              <p className="text-xs text-gray-600">{point.description[language]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

