import React from 'react';
import CountDownBox from 'src/components/event-page/countdown-box';
import VideoBox from 'src/components/event-page/video-box';
import SlideshowBox from 'src/components/event-page/slideshow-box';
import Image1 from 'static/images/img-01-lg.jpg';
import Image2 from 'static/images/img-02-lg.jpg';
import Image3 from 'static/images/img-03-lg.jpg';
import MapBox from '../components/event-page/map-box';
import AddressBox from 'src/components/event-page/address-box';
import { ICONS } from '../utils/icons';

export default function Index() {
    const wideContent = 'px-4 xl:px-15vw 2xl:px-20vw';

    return (
        <div className='flex flex-col items-center justify-center w-full '>
            <div
                className={
                    'relative z-0 bg-gray-300 bg-bottom bg-cover flex flex-col items-center justify-center mb-4 py-16 w-full'
                }
                style={{ backgroundImage: `url(${Image1})` }}
                id='EventTitleContainer'
            >
                <div className='z-0 bg-gray-900 opacity-70 absolute-full' />
                <div className='z-10 w-80 md:w-96'>
                    <CountDownBox />
                </div>
            </div>
            <div className={wideContent}>
                <div className='grid w-full grid-cols-1 mb-4 md:grid-cols-2 gap-x-4 gap-y-4'>
                    <VideoBox className='w-full' />
                    <SlideshowBox className='w-full' />
                </div>
                <div className='w-full mb-4 bg-white rounded shadow font-weight-600 center-content'>
                    <a
                        href='https://storage.googleapis.com/i14worlds2022-presentations/I14worlds2022_invitation.pdf'
                        target='_blank'
                        rel='noopener noreferrer'
                        className={
                            'flex flex-col md:flex-row items-center justify-center ' +
                            'w-full p-3 text-center cursor-pointer ' +
                            'text-gray-700 hover:text-rose-600 '
                        }
                    >
                        <div className='flex flex-row mb-2 space-x-2 opacity-50 md:mb-0 md:mr-2'>
                            <div className='w-6 h-6'>{ICONS.slideshow}</div>
                        </div>
                        <div className='mb-1/2'>
                            View invitation PDF in new tab (and download/print)
                        </div>
                    </a>
                </div>
                <div className='w-full mb-4 overflow-hidden rounded shadow'>
                    <div
                        className='relative w-full h-0'
                        style={{ paddingTop: 'calc((1376/2400) * 100%)' }}
                    >
                        <img className='absolute-full' src={Image2} />
                    </div>
                </div>
                <div className='grid w-full grid-cols-3 mb-4 gap-x-4 gap-y-4 '>
                    <AddressBox className='w-full h-full col-span-3 mb-12 md:col-span-1 md:mb-0' />
                    <MapBox className='w-full col-span-3 md:col-span-2' />
                </div>
                <div className='relative w-full mb-16 overflow-hidden rounded shadow'>
                    <img src={Image3} className='w-full h-auto' />
                </div>
            </div>
        </div>
    );
}
