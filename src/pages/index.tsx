import React from 'react';
import WhiteLogo from 'static/images/EventLogo2022bCropped.svg';

export default function Index() {
    return (
        <div>
            <div
                className={
                    'z-0 bg-gray-900 absolute-full ' +
                    'transition-opacity duration-1000 delay-500'
                }
            />

            <div className='relative z-10 flex flex-col items-center justify-items-center'>
                <img
                    className='mb-8 lg:mb-10 w-90vw sm:w-70vw md:w-128'
                    src={WhiteLogo}
                    style={{
                        filter: 'drop-shadow(0 0 5px rgba(0, 0, 0, 0.6))',
                        WebkitFilter: 'drop-shadow(0 0 5px rgba(0, 0, 0, 0.6))',
                    }}
                />
                <div className='px-4 py-2 text-lg rounded shadow cursor-not-allowed text-rose-50 bg-rose-600 font-weight-600 md:text-base'>
                    More details soon ...
                </div>
            </div>
        </div>
    );
}
