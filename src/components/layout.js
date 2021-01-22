import React from 'react';
import Footer from './footer';
import { Helmet } from 'react-helmet';

export default function Layout({ children, pageContext }) {
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

    if (pageContext.layout === 'landing') {
        return (
            <div className='fixed top-0 left-0 w-full h-full center-content'>
                {helmetMeta}
                <main>{children}</main>
            </div>
        );
    }

    return (
        <div
            className={
                'relative top-0 flex flex-col w-full min-h-screen bg-gray-100 ' +
                'px-5vw xl:px-15vw 2xl:px-25vw '
            }
        >
            {helmetMeta}
            <main>{children}</main>
            <div className='self-stretch flex-grow' />
            <Footer />
        </div>
    );
}
