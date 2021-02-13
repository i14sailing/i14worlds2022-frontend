import React, { useEffect, useState } from 'react';
import GrayLogo from 'static/images/EventLogo2022GrayCropped.svg';

export default function CountDownBox() {
    // Set the date we're counting down to
    let endDate = new Date('Jul 31, 2022 08:00:00').getTime();

    let [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        if (new Date().getTime() < endDate) {
            refreshCountDown();
            const interval = setInterval(refreshCountDown, 1000);
            return () => {
                clearInterval(interval);
            };
        }
    }, []);

    function refreshCountDown() {
        let difference = (endDate - new Date().getTime()) / 1000;

        let days = Math.floor(difference / 86400);
        let hours = Math.floor((difference % 86400) / 3600);
        let minutes = Math.floor((difference % 3600) / 60);
        let seconds = Math.floor(difference % 60);

        if (difference < 0) {
            // no Interval anymore on page refresh
            days = hours = minutes = seconds = 0;
        }

        setCountdown({
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
        });
    }

    return (
        <>
            <div
                className={
                    'mb-2 p-4 md:p-6 bg-white rounded shadow z-10 ' +
                    'font-weight-500 text-lg italic text-gray-800 '
                }
            >
                <div
                    className='relative w-full h-0'
                    style={{ paddingTop: 'calc((368/823) * 100%)' }}
                >
                    <img className='absolute-full' src={GrayLogo} />
                </div>
            </div>
            <div
                className={
                    'bg-white shadow px-3 py-2 rounded grid grid-cols-11 z-10 w-full ' +
                    'text-xl font-weight-600 text-gray-800 '
                }
            >
                <Col label={countdown.days} />
                <Col label=':' />
                <Col label={countdown.hours} />
                <Col label=':' />
                <Col label={countdown.minutes} />
                <Col label=':' />
                <Col label={countdown.seconds} />
            </div>
        </>
    );
}

interface Props {
    label: string | number;
}
function Col(props: Props) {
    return (
        <div
            className={
                'w-full text-center ' +
                (props.label === ':' ? 'col-span-1' : 'col-span-2')
            }
        >
            {props.label}
        </div>
    );
}
