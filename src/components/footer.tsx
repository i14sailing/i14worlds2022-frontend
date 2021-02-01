import React from 'react';
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
const Buttons = (
    <>
        <a
            href='https://cms.i14worlds2022.com/admin'
            target='_blank'
            rel='noopener noreferrer'
            className='mr-2'
            title='Admin Login'
        >
            <div className={`w-5 h-5 ${linkColors}`}>{ICONS.admin}</div>
        </a>
        <a
            href='https://github.com/i14sailing/i14worlds2022-frontend'
            target='_blank'
            rel='noopener noreferrer'
            title='Code on GitHub'
        >
            <div className={`w-5 h-5 ${linkColors}`}>{ICONS.github}</div>
        </a>
    </>
);

function Footer() {
    return (
        <>
            <div className='flex flex-col mt-8 md:hidden'>
                {BuiltWithLove}
                <div className='flex flex-row items-center justify-center pt-2 pb-6'>
                    {Buttons}
                </div>
            </div>
            <div className='flex-row items-center justify-center hidden py-8 md:flex'>
                <div className='w-12 h-5' />
                {Stretch}
                {BuiltWithLove}
                {Stretch}
                {Buttons}
            </div>
        </>
    );
}

export default Footer;
