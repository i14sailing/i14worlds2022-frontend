import React, { useState } from 'react';
import { ICONS } from '../utils/icons';

const linkColors =
    'text-gray-600 transition-colors duration-100 cursor-pointer hover:text-rose-400';

const BuiltWithLove = (
    <div className='flex flex-row items-center self-center justify-center text-gray-800'>
        <span>built with</span>
        <div className='w-5 h-5 mx-1 text-rose-400' title='love'>
            {ICONS.heart}
        </div>
        <span>in munich</span>
    </div>
);
const Stretch = <div className='self-stretch flex-grow' />;
function Buttons() {
    const [label, setLabel] = useState('email login');

    return (
        <div className='relative flex flex-row items-center justify-center pt-4 pb-8 md:pt-0 md:pb-0 group'>
            <div
                className={
                    'absolute left-0 pr-3 text-gray-800 transform -translate-x-full -translate-y-1/2 top-1/2 opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity duration-150'
                }
            >
                {label}
            </div>
            <a
                href='https://privateemail.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='mr-2'
                title='Email Login'
                onMouseEnter={() => setLabel('email login')}
            >
                <div className={`w-5 h-5 ${linkColors}`}>{ICONS.email}</div>
            </a>
            <a
                href='https://cms.i14worlds2022.com/admin'
                target='_blank'
                rel='noopener noreferrer'
                className='mr-2'
                title='Admin Login'
                onMouseEnter={() => setLabel('edit page')}
            >
                <div className={`w-5 h-5 ${linkColors}`}>{ICONS.admin}</div>
            </a>
            <a
                href='https://github.com/i14sailing/i14worlds2022-frontend'
                target='_blank'
                rel='noopener noreferrer'
                title='Code on GitHub'
                onMouseEnter={() => setLabel('')}
            >
                <div className={`w-5 h-5 ${linkColors}`}>{ICONS.github}</div>
            </a>
        </div>
    );
}

function Footer() {
    return (
        <>
            <div className='flex flex-col mt-8 md:hidden'>
                {BuiltWithLove}
                <Buttons />
            </div>
            <div className='flex-row items-center justify-center hidden py-8 md:flex'>
                <div className='w-12 h-5' />
                {Stretch}
                {BuiltWithLove}
                {Stretch}
                <Buttons />
            </div>
        </>
    );
}

export default Footer;
