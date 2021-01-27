import React from 'react';

export default function ContactCard(props: { contact: ContactNode }) {
    return (
        <div
            className={
                'bg-white rounded shadow flex flex-col overflow-hidden items-center justify-center'
            }
        >
            <img
                src={props.contact.image.childImageSharp.original.src}
                className='w-full bg-gray-300'
            />
            <div
                className={
                    'flex flex-col justify-center p-2 ' +
                    'text-gray-800 font-weight-500 text-center'
                }
            >
                <div className='h-7 font-weight-700'>{props.contact.role}</div>
                <div className='h-7'>{props.contact.name}</div>
                <a
                    className='h-7 hover:text-rose-500'
                    href={`mailto:${props.contact.email}`}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    {props.contact.email}
                </a>
            </div>
        </div>
    );
}

type ContactNode = {
    name: string;
    email: string;
    role: string;
    image: {
        childImageSharp: {
            original: {
                src: string;
            };
        };
    };
};
