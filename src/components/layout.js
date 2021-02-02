import React, { useEffect, useState } from 'react';
import Footer from './footer';
import Navbar from './navbar';
import { Helmet } from 'react-helmet';

export default function Layout({ location, children, pageContext }) {
    const helmetMeta = (
        <Helmet>
            <meta charSet='utf-8' />
            <title>I14 Worlds 2022</title>
            <meta property='og:title' content='I14 Worlds 2022' />
            <meta
                name='description'
                content='International 14 World Championship 2022 - Flensburg, Germany'
            />
            <meta
                property='og:description'
                content='International 14 World Championship 2022 - Flensburg, Germany'
            />
            <meta property='og:type' content='website' />
        </Helmet>
    );

    const [isEventPage, setIsEventPage] = useState(
        pageContext.layout === 'event'
    );
    useEffect(() => {
        setIsEventPage(location.pathname.length < 2);
    }, [location]);

    const regularContent = 'px-4 lg:px-10vw xl:px-15vw 2xl:px-30vw';

    return (
        <div
            className={
                'relative top-0 flex flex-col min-h-screen ' +
                'bg-gray-100 w-full '
            }
        >
            {helmetMeta}
            <Navbar isEventPage={isEventPage} pathname={location.pathname} />
            <main
                className={
                    isEventPage
                        ? ''
                        : `md:mt-16 mb-16 md:mb-20 lg:mb-24 xl:mb-28 ${regularContent}`
                }
            >
                {children}
            </main>
            <div className='self-stretch flex-grow' />
            <div className={`w-full ${regularContent}`}>
                <Footer />
            </div>
        </div>
    );
}
