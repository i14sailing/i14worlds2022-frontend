import React, { useState } from 'react';
import { ICONS } from '../../utils/icons';

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
                    <div className={'w-12 h-12 p-1 '}>{ICONS.play}</div>
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
