import React from 'react';
import WhiteLogo from 'static/images/EventLogo2022bCropped.svg';
import LandingImage from 'static/images/LandingImage.jpg';

export default function Index() {
    const bgMediaClass = 'absolute-full z-0 object-cover';

    let bgMedia: React.ReactNode;
    if (window.innerWidth > 768) {
        bgMedia = (
            <video className={bgMediaClass} autoPlay muted loop>
                <source
                    id='mp4'
                    src='https://storage.googleapis.com/i14-worlds-2021-gallery/default-images/GCA_Teaser_Cut.mp4'
                    type='video/mp4'
                />
            </video>
        );
    } else {
        bgMedia = <img className={bgMediaClass} src={LandingImage} />;
    }

    return (
        <div>
            {bgMedia}
            <div className='z-0 bg-gray-800 opacity-60 absolute-full' />

            <div className='relative z-10 flex flex-col items-center justify-items-center'>
                <img
                    className='mb-8 lg:mb-10 w-90vw sm:w-70vw md:w-128'
                    src={WhiteLogo}
                    style={{
                        filter: 'drop-shadow(0 0 5px rgba(0, 0, 0, 0.6))',
                        WebkitFilter: 'drop-shadow(0 0 5px rgba(0, 0, 0, 0.6))',
                    }}
                />
                <div className='px-4 py-2 text-lg rounded shadow cursor-not-allowed text-rose-50 bg-rose-600 font-weight-600 md:text-md'>
                    More details soon ...
                </div>
            </div>
        </div>
    );
}
