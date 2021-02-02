import React, { useState } from 'react';
import { ICONS } from '../../utils/icons';

export default function VideoBox(props: { className: string }) {
    const [videoMounted, setVideoMounted] = useState(false);

    return (
        <div className={props.className}>
            <div
                className={
                    'relative shadow rounded z-10 overflow-hidden ' +
                    'flex flex-col items-center justify-center ' +
                    'h-0 w-full pt-9/16 ' +
                    'text-gray-400 hover:text-white bg-gray-900 ' +
                    'transition-colors duration-100 cursor-pointer '
                }
                onClick={() => setVideoMounted(true)}
            >
                {!videoMounted && (
                    <div
                        className={
                            'absolute-full flex flex-col items-center justify-center'
                        }
                    >
                        <div className={'w-12 h-12 p-1 '}>{ICONS.play}</div>
                        <div className={'text-lg font-weight-500 '}>
                            Watch the Announcement
                        </div>
                    </div>
                )}
                {videoMounted && (
                    <video
                        className='absolute-full'
                        controls
                        autoPlay
                        src='https://storage.googleapis.com/i14-worlds-documents/i14worlds2021_promo_video.mp4'
                    />
                )}
            </div>
        </div>
    );
}
