import React, { useState } from 'react';
import { ICONS } from '../../utils/icons';

export default function SlideshowBox(props: { className: string }) {
    const [mounted, setMounted] = useState(false);

    return (
        <div className={props.className}>
            <div
                className={
                    'shadow rounded z-10 overflow-hidden ' +
                    'relative w-full h-0 pt-9/16 '
                }
                onClick={() => setMounted(true)}
            >
                {!mounted && (
                    <div
                        className={
                            'absolute-full flex flex-col items-center justify-center ' +
                            'text-gray-400 hover:text-white bg-gray-900 ' +
                            'transition-colors duration-100 cursor-pointer '
                        }
                    >
                        <div className={'w-12 h-12 p-1 '}>
                            {ICONS.slideshow}
                        </div>
                        <div className={'text-lg font-weight-500'}>
                            Read the Invitation
                        </div>
                    </div>
                )}

                {mounted && (
                    <iframe
                        src='https://presentation.i14worlds2022.com/invitation'
                        className='absolute-full'
                    />
                )}
            </div>
        </div>
    );
}
