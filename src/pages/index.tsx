import React from 'react';
import CountDownBox from 'src/components/event-page/countdown-box';
import VideoBox from 'src/components/event-page/video-box';
import SlideshowBox from 'src/components/event-page/slideshow-box';
import GrayLogo from 'static/images/EventLogo2022aCropped.svg';
import Image1 from 'static/images/img-01-lg.jpg';
import Image2 from 'static/images/img-02-lg.jpg';
import Image3 from 'static/images/img-03-lg.jpg';
import MapBox from '../components/event-page/map-box';
import AddressBox from 'src/components/event-page/address-box';

export default function Index() {
    return (
        <div className='flex flex-col items-center justify-center w-full '>
            <div
                className={
                    'relative z-0 w-full bg-gray-300 bg-bottom bg-cover flex flex-col items-center justify-center mb-4 py-16'
                }
                style={{ backgroundImage: `url(${Image1})` }}
                id='EventTitleContainer'
            >
                <div className='bg-gray-900 opacity-70 absolute-full' />
                <div
                    className={
                        'mb-4 p-6 w-96 bg-white rounded shadow z-10 ' +
                        'font-weight-500 text-lg italic text-gray-800 '
                    }
                >
                    <img src={GrayLogo} />
                </div>
                <CountDownBox />
            </div>
            <div className='flex flex-row items-center justify-items-center gap-x-4'>
                <VideoBox className='w-128' />
                <SlideshowBox className='w-128' />
            </div>
            <div className='mb-4 overflow-hidden rounded shadow w-260'>
                <img className='w-full h-full' src={Image2} />
            </div>
            <div className='flex flex-row items-center mb-4 justify-items-center gap-x-4'>
                <AddressBox />
                <MapBox className='w-160' />
            </div>
            <div className='mb-16 overflow-hidden rounded shadow w-260'>
                <img src={Image3} />
            </div>
        </div>
    );
}
