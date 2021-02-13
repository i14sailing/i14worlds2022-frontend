import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { ICONS } from '../../utils/icons';

mapboxgl.accessToken =
    'pk.eyJ1IjoiZG9zdHVmZnRoYXRtYXR0ZXJzIiwiYSI6ImNra2xwZTExZTJqYWIyd3F0NHVnb2ZzN2wifQ.6piOma4PdLl6Njwj2sC7_w';

export default function MapBox(props: { className: string }) {
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
            map.addControl(new mapboxgl.FullscreenControl());
            new mapboxgl.Marker({ color: '#F43F5E' })
                .setLngLat([9.525282, 54.836981])
                .addTo(map);
            return () => map.remove();
        }
    }, [mapMounted]);

    return (
        <div className={props.className}>
            <div
                className={
                    'relative shadow rounded z-10 overflow-hidden ' +
                    ` h-0 w-full pt-100% sm:pt-9/16 ` +
                    'bg-gray-900 text-gray-400 hover:text-white ' +
                    'transition-colors duration-100 cursor-pointer '
                }
                onClick={() => setMapMounted(true)}
            >
                <div className='absolute-full'>
                    <div id='mapbox' ref={mapRef} className='w-full h-full' />
                </div>
                {!mapMounted && (
                    <div
                        className={
                            'absolute-full flex flex-col items-center justify-center'
                        }
                    >
                        <div className={'w-12 h-12 p-1 '}>{ICONS.compass}</div>
                        <div className={'text-lg font-weight-500 mt-1 '}>
                            View Map
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
