import React, { useEffect, useState } from 'react';
import RegularNavbar from './navbar/regular-navbar';
import MobileNavbar from './navbar/mobile-navbar';

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
        <>
            <div id='RegularNavbar' className='hidden lg:block'>
                <RegularNavbar
                    transparent={transparent}
                    pathname={props.pathname}
                />
            </div>
            <div id='MobileNavbar' className='block lg:hidden'>
                <MobileNavbar
                    transparent={transparent}
                    pathname={props.pathname}
                />
            </div>
        </>
    );
}

export default Navbar;
