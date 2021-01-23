import React, { useEffect, useState } from 'react';

export default function CountDownBox() {
    // Set the date we're counting down to
    let endDate = new Date('Jul 31, 2022 08:00:00').getTime();

    let [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    useEffect(refreshCountDown, []);
    let [countdownInterval] = useState(setInterval(refreshCountDown, 1000));

    function refreshCountDown() {
        let difference = (endDate - new Date().getTime()) / 1000;

        let days = Math.floor(difference / 86400);
        let hours = Math.floor((difference % 86400) / 3600);
        let minutes = Math.floor((difference % 3600) / 60);
        let seconds = Math.floor(difference % 60);

        if (difference < 0) {
            clearInterval(countdownInterval);
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
        <div
            className={
                'bg-white shadow p-4 rounded grid grid-cols-7 z-10 w-96 text-2xl font-weight-600 text-gray-800 '
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
    );
}

interface Props {
    label: string | number;
}
function Col(props: Props) {
    return <div className='text-center'>{props.label}</div>;
}
