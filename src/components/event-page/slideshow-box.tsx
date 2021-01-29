import React, { useState } from 'react';

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
                    <div className={'w-12 h-12 p-1 '}>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            height='24'
                            viewBox='0 0 24 24'
                            width='24'
                        >
                            <path d='M0 0h24v24H0V0z' fill='none' />
                            <path d='M8 19h8c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v13c0 .55.45 1 1 1zm-5-2h2c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1zM18 7v9c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1z' />
                        </svg>
                    </div>
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
