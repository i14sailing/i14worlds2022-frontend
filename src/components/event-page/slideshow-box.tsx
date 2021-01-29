import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export default function SlideshowBox() {
    const { slideshow } = useStaticQuery(query);

    console.log(slideshow);

    function openPresentation() {
        window.open(
            'https://storage.googleapis.com/i14-worlds-documents/I14worlds2021_invitation.pdf',
            '_blank'
        );
    }
    return (
        <div
            className={
                'shadow rounded z-10 overflow-hidden bg-gray-900 ' +
                'flex flex-col items-center justify-center ' +
                'w-128 h-72 mb-4 ' +
                'text-gray-400 hover:text-white ' +
                'transition-colors duration-100 cursor-pointer '
            }
            onClick={openPresentation}
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
    );
}

const query = graphql`
    query SlideshowQuery {
        slideshow: strapiSlideshow(
            SlideName: { eq: "i14worlds2021-invitation-" }
        ) {
            SlideCount
            SlideName
            Extension
            SlideNumberLength
            BaseUrl
        }
    }
`;

type Slideshow = {
    SlideCount: number;
    SlideName: string;
    Extension: string;
    SlideNumberLength: number;
    BaseUrl: string;
};
