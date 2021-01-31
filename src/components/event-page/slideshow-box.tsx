import React, { useState } from 'react';
import { ICONS } from '../../utils/icons';

export default function SlideshowBox() {
    const [mounted, setMounted] = useState(false);

    return (
        <div
            className={
                'shadow rounded z-10 ' +
                'relative w-128 h-72 mb-4 overflow-hidden '
            }
            onClick={() => setMounted(true)}
        >
            {!mounted && (
                <div
                    className={
                        'w-full h-full flex flex-col items-center justify-center ' +
                        'text-gray-400 hover:text-white bg-gray-900 ' +
                        'transition-colors duration-100 cursor-pointer '
                    }
                >
                    <div className={'w-12 h-12 p-1 '}>{ICONS.slideshow}</div>
                    <div className={'text-lg font-weight-500 '}>
                        Read the Invitation
                    </div>
                </div>
            )}

            {mounted && (
                <iframe
                    src='https://presentation.i14worlds2022.com/invitation'
                    className='relative w-full h-full'
                />
            )}
        </div>
    );
}
