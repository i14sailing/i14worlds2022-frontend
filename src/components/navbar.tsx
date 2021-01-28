import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';

/*
If I were to use: <img src="....svg"/>, I would not be able to change
the fill color of the svg at runtime. With this I can just change the
text color of the parent node.
*/
const I14Icon = (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 417 417' version='1.1'>
        <path d='M16.538,0l76.718,0l0,314.682l-76.718,0l0,-314.682Zm0,416.667l383.591,-0l-0,-66.612l-383.591,0l0,66.612Zm267.824,-324.789l0,96.012l-79.015,0l79.015,-96.012Zm-155.733,163.083l155.733,0l0,59.721l76.718,0l0,-59.721l39.049,0l-0,-66.611l-39.049,-0l0,-188.35l-76.718,-0l0,0.459l-155.273,187.891l-0.46,-0l0,66.611Z' />
    </svg>
);

const HeartIcon = (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        height='24'
        viewBox='0 0 24 24'
        width='24'
    >
        <path d='M13.35 20.13c-.76.69-1.93.69-2.69-.01l-.11-.1C5.3 15.27 1.87 12.16 2 8.28c.06-1.7.93-3.33 2.34-4.29 2.64-1.8 5.9-.96 7.66 1.1 1.76-2.06 5.02-2.91 7.66-1.1 1.41.96 2.28 2.59 2.34 4.29.14 3.88-3.3 6.99-8.55 11.76l-.1.09z' />
    </svg>
);

const TrophyIcon = (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        height='24'
        viewBox='0 0 24 24'
        width='24'
    >
        <rect fill='none' height='24' width='24' />
        <path d='M19,5h-2V4c0-0.55-0.45-1-1-1H8C7.45,3,7,3.45,7,4v1H5C3.9,5,3,5.9,3,7v1c0,2.55,1.92,4.63,4.39,4.94 c0.63,1.5,1.98,2.63,3.61,2.96V19H8c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h8c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h-3v-3.1 c1.63-0.33,2.98-1.46,3.61-2.96C19.08,12.63,21,10.55,21,8V7C21,5.9,20.1,5,19,5z M5,8V7h2v3.82C5.84,10.4,5,9.3,5,8z M19,8 c0,1.3-0.84,2.4-2,2.82V7h2V8z' />
    </svg>
);

const ChecklistIcon = (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        height='24'
        viewBox='0 0 24 24'
        width='24'
    >
        <path d='M0 0h24v24H0V0z' fill='none' />
        <path d='M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9.29 16.29L6.7 13.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l5.88-5.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-6.59 6.59c-.38.39-1.02.39-1.41 0z' />
    </svg>
);

const ContactIcon = (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        height='24'
        viewBox='0 0 24 24'
        width='24'
    >
        <path d='M0 0h24v24H0z' fill='none' />
        <path d='M21 8V7l-3 2-3-2v1l2.72 1.82c.17.11.39.11.55 0L21 8zm1-5H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm7.5-6h-7c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v5c0 .28-.22.5-.5.5z' />
    </svg>
);

const NavLink = (props: {
    icon: React.ReactNode;
    label: string;
    to: string;
    transparent: boolean;
}) => (
    <Link
        to={props.to}
        className={
            'flex flex-row h-10 z-10 my-1 px-2 mx-2 group items-center justify-center' +
            'transition-colors duration-200 cursor-pointer ' +
            (props.transparent
                ? 'text-white hover:text-gray-300 '
                : 'text-gray-500 hover:text-rose-500 ')
        }
    >
        <div className={`w-5 h-5 mr-2 opacity-75`}>{props.icon}</div>
        <div className={`h-10 leading-10 font-weight-600`}>{props.label}</div>
    </Link>
);

function Navbar(props: { isEventPage: boolean }) {
    const [transparent, setTransparent] = useState(props.isEventPage);
    useEffect(() => {
        if (props.isEventPage) {
            updateScroll();
            window.addEventListener('scroll', updateScroll);
        } else {
            window.removeEventListener('scroll', updateScroll);
            setTransparent(false);
        }
    }, [props.isEventPage]);

    function updateScroll() {
        const clientHeight = document.getElementById('EventTitleContainer')
            ?.clientHeight;
        if (clientHeight) {
            setTransparent(window.scrollY < clientHeight - 64);
        }
    }

    // Remove event listeners on unmount
    useEffect(() => {
        return () => {
            window.removeEventListener('scroll', updateScroll);
        };
    }, []);

    return (
        <div
            className={'fixed top-0 left-0 flex flex-row z-50 p-1 w-full h-14 '}
        >
            <div
                className={
                    'z-0 absolute-full bg-white shadow ' +
                    (transparent ? 'opacity-0 ' : 'opacity-100 ') +
                    ' transition-opacity duration-200'
                }
            />
            <div
                className={
                    'absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ' +
                    'w-12 h-12 p-3 text-gray-500 transition-opacity duration-200 ' +
                    (transparent ? 'opacity-0 ' : 'opacity-75 ')
                }
            >
                {I14Icon}
            </div>
            <NavLink
                transparent={transparent}
                icon={TrophyIcon}
                to='/event'
                label='Event'
            />
            <NavLink
                transparent={transparent}
                icon={ChecklistIcon}
                to='/guide'
                label='Sailors Guide'
            />
            <NavLink
                transparent={transparent}
                icon={ContactIcon}
                to='/contact-us'
                label='Contact Us'
            />
        </div>
    );
}

export default Navbar;
