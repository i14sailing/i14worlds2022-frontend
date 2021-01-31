import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { ICONS } from '../../utils/icons';

mapboxgl.accessToken =
    'pk.eyJ1IjoiZG9zdHVmZnRoYXRtYXR0ZXJzIiwiYSI6ImNra2xwZTExZTJqYWIyd3F0NHVnb2ZzN2wifQ.6piOma4PdLl6Njwj2sC7_w';

export default function MapBox() {
    const [mapMounted, setMapMounted] = useState(false);

    const mapRef = useRef(null);

    useEffect(() => {
        if (mapMounted) {
            const map = new mapboxgl.Map({
                container: mapRef.current,
                style:
                    'mapbox://styles/dostuffthatmatters/ckklrlyg3426q17mipvw8m7kz', // stylesheet location
                center: [9.525282, 54.836981], // starting position [lng, lat]
                zoom: 4, // starting zoom
            });
            new mapboxgl.Marker({ color: '#F43F5E' })
                .setLngLat([9.525282, 54.836981])
                .addTo(map);
            return () => map.remove();
        }
    }, [mapMounted]);

    return (
        <div
            className={
                'relative shadow rounded z-10 overflow-hidden ' +
                'flex flex-col items-center justify-center ' +
                'w-192 h-108 mb-4 ' +
                'bg-gray-900 text-gray-400 hover:text-white ' +
                'transition-colors duration-100 cursor-pointer '
            }
            onClick={() => setMapMounted(true)}
        >
            <div
                id='mapbox'
                ref={mapRef}
                className='absolute top-0 bottom-0 left-0 right-0 w-full h-full'
            />
            {!mapMounted && (
                <div className={'flex flex-col items-center justify-center'}>
                    <div className={'w-12 h-12 p-1 '}>{ICONS.compass}</div>
                    <div className={'text-lg font-weight-500 mt-1 '}>
                        View on a Map
                    </div>
                </div>
            )}
        </div>
    );
}
