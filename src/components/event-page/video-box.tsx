import React, { useState } from 'react';

export default function VideoBox() {
    const [videoMounted, setVideoMounted] = useState(false);

    return (
        <div
            className={
                'shadow rounded z-10 overflow-hidden bg-gray-900 ' +
                'flex flex-col items-center justify-center ' +
                'w-128 h-72 mb-4 ' +
                'text-gray-400 hover:text-white ' +
                'transition-colors duration-100 cursor-pointer '
            }
            onClick={() => setVideoMounted(true)}
        >
            {!videoMounted && (
                <div className={'flex flex-col items-center justify-center'}>
                    <div className={'w-12 h-12 p-1 '}>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            height='24'
                            viewBox='0 0 24 24'
                            width='24'
                        >
                            <path d='M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z' />
                        </svg>
                    </div>
                    <div className={'text-lg font-weight-500 '}>
                        Watch the Announcement
                    </div>
                </div>
            )}
            {videoMounted && (
                <video
                    className='w-full h-full'
                    controls
                    autoPlay
                    src='https://storage.googleapis.com/i14-worlds-documents/i14worlds2021_promo_video.mp4'
                />
            )}
        </div>
    );
}
