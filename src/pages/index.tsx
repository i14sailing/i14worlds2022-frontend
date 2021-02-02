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
    const wideContent = 'px-4 xl:px-15vw 2xl:px-20vw';

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
            <div className={wideContent}>
                <div className='grid w-full grid-cols-2 mb-4 gap-x-4'>
                    <VideoBox className='w-full' />
                    <SlideshowBox className='w-full' />
                </div>
                <div className='w-full mb-4 overflow-hidden rounded shadow'>
                    <img className='w-full h-full' src={Image2} />
                </div>
                <div className='grid w-full grid-cols-3 mb-4 gap-x-4'>
                    <AddressBox className='w-full h-full' />
                    <MapBox className='w-full col-span-2' />
                </div>
                <div className='w-full mb-16 overflow-hidden rounded shadow'>
                    <img src={Image3} />
                </div>
            </div>
        </div>
    );
}
