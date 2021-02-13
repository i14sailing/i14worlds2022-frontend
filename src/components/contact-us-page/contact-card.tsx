import React from 'react';

export default function ContactCard(props: { contact: ContactNode }) {
    return (
        <div
            className={
                'bg-white rounded shadow flex flex-col overflow-hidden items-center justify-center'
            }
        >
            <div
                className='relative w-full h-0 bg-gray-300'
                style={{ paddingTop: '50%' }}
            >
                <img
                    src={props.contact.Image.publicURL}
                    className='absolute-full'
                />
            </div>
            <div
                className={
                    'flex flex-col justify-center p-2 ' +
                    'text-gray-800 font-weight-500 text-center'
                }
            >
                {props.contact.Role && (
                    <div className='h-7 font-weight-700'>
                        {props.contact.Role}
                    </div>
                )}
                <div
                    className={
                        'h-7 ' +
                        (props.contact.Role
                            ? 'font-weight-500'
                            : 'font-weight-700')
                    }
                >
                    {props.contact.Name}
                </div>
                <a
                    className='h-7 hover:text-rose-500'
                    href={`mailto:${props.contact.Email}`}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    {props.contact.Email}
                </a>
            </div>
        </div>
    );
}

type ContactNode = {
    Name: string;
    Email: string;
    Role?: string;
    Country?: string;
    Image: {
        publicURL: string;
    };
};
