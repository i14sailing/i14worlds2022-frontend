import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { ICONS } from '../utils/icons';

const NavLink = (props: {
    icon: React.ReactNode;
    label: string;
    to: string;
    transparent: boolean;
    active: boolean;
}) => (
    <Link
        to={props.to}
        className={
            'flex flex-row h-10 z-10 my-1 px-2 mx-2 group items-center justify-center' +
            'transition-all duration-200 cursor-pointer ' +
            (props.transparent
                ? props.active
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white '
                : props.active
                ? 'text-rose-500'
                : 'text-gray-500 hover:text-rose-500 ')
        }
    >
        <div className={`w-5 h-5 mr-2 opacity-75`}>{props.icon}</div>
        <div className={`h-10 leading-10 font-weight-600`}>{props.label}</div>
    </Link>
);

function Navbar(props: { isEventPage: boolean; pathname: string }) {
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
            className={
                'fixed hidden top-0 left-0 sm:flex flex-row z-50 p-1 w-full h-14 '
            }
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
                    'absolute right-0 lg:right-1/2 top-1/2 transform lg:translate-x-1/2 -translate-y-1/2 ' +
                    'w-12 h-12 p-3 text-gray-500 transition-opacity duration-200 ' +
                    (transparent ? 'opacity-0 ' : 'opacity-75 ')
                }
            >
                {ICONS.i14}
            </div>
            <NavLink
                transparent={transparent}
                icon={ICONS.trophy}
                to='/'
                label='Event'
                active={props.pathname.length < 2}
            />
            <NavLink
                transparent={transparent}
                icon={ICONS.checklist}
                to='/guide'
                label='Sailors Guide'
                active={props.pathname.includes('guide')}
            />
            <NavLink
                transparent={transparent}
                icon={ICONS.contact}
                to='/contact-us'
                label='Contact Us'
                active={props.pathname.includes('contact-us')}
            />
        </div>
    );
}

export default Navbar;
