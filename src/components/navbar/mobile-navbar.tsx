import { Link } from 'gatsby';
import React, { useState } from 'react';
import { ICONS } from 'src/utils/icons';

function MobileNavLink(props: {
    icon: React.ReactNode;
    label: string;
    to: string;
    active: boolean;
    onClick(): void;
}) {
    return (
        <Link to={props.to} onClick={props.onClick}>
            <div
                className={
                    'relative p-2 text-lg font-weight-600 flex sm:hidden flex-row ' +
                    'items-center justify-start rounded cursor-pointer ' +
                    'w-48 h-12 mx-2 my-1 ' +
                    (props.active
                        ? 'text-white bg-gray-800'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800')
                }
            >
                <div className={'w-8 h-8'}>{props.icon}</div>
                <div className={'ml-3'}>{props.label}</div>
            </div>
        </Link>
    );
}
export default function MobileNavbar(props: {
    transparent: boolean;
    pathname: string;
}) {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        window.addEventListener('scroll', closeModal);
        setModalOpen(true);
    };
    const closeModal = () => {
        window.removeEventListener('scroll', closeModal);
        setModalOpen(false);
    };

    return (
        <React.Fragment>
            <div
                onClick={closeModal}
                className={
                    'fixed z-40 w-full h-full overflow-y-hidden ' +
                    'bg-gray-900 transition-opacity duration-300 ' +
                    (modalOpen
                        ? 'opacity-75 pointer-events-auto'
                        : 'opacity-0 pointer-events-none')
                }
            />
            <div
                onClick={closeModal}
                className={
                    'fixed top-0 right-0 z-40 w-18 h-18 p-4 m-0 ' +
                    'transition-opacity duration-300 text-white ' +
                    (modalOpen
                        ? 'opacity-100 pointer-events-auto'
                        : 'opacity-0 pointer-events-none')
                }
            >
                {ICONS.close}
            </div>
            <div
                onClick={openModal}
                className={
                    'fixed top-0 left-0 z-30 w-18 h-18 p-4 m-0 ' +
                    ' pointer-events-auto rounded-br ' +
                    'transition-colors duration-200 ' +
                    (props.transparent
                        ? 'text-white'
                        : 'bg-white text-gray-900 shadow ')
                }
                style={{
                    filter: props.transparent
                        ? 'drop-shadow(0 0 1.5px black)'
                        : '',
                }}
            >
                {ICONS.menu}
            </div>
            <div
                className={
                    'fixed shadow z-50 left-0 top-0 h-screen ' +
                    'bg-gray-900 flex flex-col transition-width ' +
                    ' duration-300 overflow-hidden pt-1 ' +
                    (modalOpen ? 'w-52' : 'w-0')
                }
            >
                <MobileNavLink
                    onClick={closeModal}
                    icon={ICONS.trophy}
                    to='/'
                    label='Event'
                    active={props.pathname.length < 2}
                />
                <MobileNavLink
                    onClick={closeModal}
                    icon={ICONS.checklist}
                    to='/guide'
                    label='Sailors Guide'
                    active={props.pathname.includes('guide')}
                />
                <MobileNavLink
                    onClick={closeModal}
                    icon={ICONS.contact}
                    to='/contact-us'
                    label='Contact Us'
                    active={props.pathname.includes('contact-us')}
                />
            </div>
        </React.Fragment>
    );
}
