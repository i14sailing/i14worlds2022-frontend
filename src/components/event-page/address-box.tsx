import React from 'react';
import { ICONS } from '../../utils/icons';

export default function AddressBox() {
    return (
        <div
            className={
                'relative rounded z-10 overflow-hidden ' +
                'flex flex-col items-center justify-center ' +
                'w-96 h-90 mb-4 p-4 text-gray-800 ' +
                'text-lg font-weight-500 '
            }
        >
            <div className='font-weight-700'>Flensburger Segel-Club</div>
            <div className=''>Quellental</div>
            <div className='mb-4'>24960 Glücksburg</div>
            <div className='flex flex-col items-start justify-start'>
                <LinkButton to='/' label='Google Maps' className='mb-1' />
                <LinkButton to='/' label='Apple Maps' />
            </div>
        </div>
    );
}

function LinkButton(props: { label: string; to: string; className?: string }) {
    return (
        <a href={props.to} target='_blank' rel='noopener noreferer'>
            <div
                className={
                    'flex flex-row items-center justify-center ' +
                    'text-blue-400 hover:text-rose-400 ' +
                    'text-base font-weight-600 ' +
                    props.className
                }
            >
                <div className='w-6 h-6 p-1'>{ICONS.open}</div>
                <div className='ml-1'>{props.label}</div>
            </div>
        </a>
    );
}
