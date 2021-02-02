import React from 'react';
import { useState } from 'react';
import { ICONS } from 'src/utils/icons';
import { ScheduleDay } from 'src/utils/types';

const TRANSITION = 'duration-300 transition-all';
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];

function getTagIcon(tag: string) {
    switch (tag) {
        case 'Sailing':
            return {
                icon: ICONS.sailboat,
                color: 'text-blue-500 opacity-50',
            };
        case 'Measurement':
            return {
                icon: ICONS.measurement,
                color: 'text-gray-500 opacity-60',
            };
        case 'Dinner':
            return {
                icon: ICONS.food,
                color: 'text-orange-500 opacity-50',
            };
        case 'Pricegiving':
            return {
                icon: ICONS.tropy,
                color: 'text-yellow-500 opacity-50',
            };
        case 'Meeting':
            return {
                icon: ICONS.group,
                color: 'text-gray-500 opacity-60',
            };
        case 'Party':
            return {
                icon: ICONS.party,
                color: 'text-rose-500 opacity-50',
            };
        case 'Default':
            return {
                icon: <div />,
                color: 'opacity-0',
            };
    }
}

interface Props {
    first: boolean;
    last: boolean;
    scheduleDay: ScheduleDay;
}
export default function ScheduleDayRow(props: Props) {
    const [open, setOpen] = useState(false);
    const [date] = useState(new Date(props.scheduleDay.Date));

    const marginyOpen: string =
        (props.first ? 'mt-0 ' : 'mt-2 ') + (props.last ? 'mb-0 ' : 'mb-2 ');

    const a = date.getDate() % 10;
    const dayString =
        MONTHS[date.getMonth()] +
        ' ' +
        date.getDate() +
        (a === 1 ? 'st' : '') +
        (a === 2 ? 'nd' : '') +
        (a === 3 ? 'rd' : '') +
        (a === 0 || a > 3 ? 'th' : '');

    const tagsList: string[] = props.scheduleDay.Tags.map(
        (t: { Name: string }) => t.Name
    );

    return (
        <div
            className={
                'relative flex flex-col w-full bg-white z-10 shadow ' +
                (props.first ? 'rounded-t ' : '') +
                (props.last ? 'rounded-b ' : '') +
                (open ? marginyOpen : 'my-0 ') +
                (!props.last
                    ? 'border-b-2 ' +
                      (open ? 'border-white ' : 'border-gray-100 ')
                    : '') +
                TRANSITION
            }
        >
            <div
                className={
                    'w-full h-18 sm:h-12 text-base cursor-pointer text-gray-800 ' +
                    'flex flex-row items-center justify-center font-weight-500 '
                }
                onClick={() => setOpen(!open)}
            >
                <div className='relative flex flex-col ml-4 sm:flex-row'>
                    <div className='mb-1 mr-2 w-30 sm:mb-0'>
                        {DAYS[date.getDay()]}, {dayString}
                    </div>
                    <div className='relative flex flex-row items-center'>
                        <div
                            className={
                                props.scheduleDay.Label.includes('Worlds')
                                    ? 'font-weight-700 '
                                    : 'font-weight-500 '
                            }
                        >
                            {props.scheduleDay.Label}
                        </div>
                        {tagsList.map((t: string) => {
                            const { icon, color } = getTagIcon(t);
                            return (
                                <div
                                    className={`w-5 h-5 ml-2 ${color}`}
                                    title={t}
                                >
                                    {icon}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className='self-stretch flex-grow block' />
                <div
                    className={
                        'w-12 h-12 p-3 text-gray-500 ' +
                        `transform ${TRANSITION} ` +
                        (open ? 'rotate-180 ' : 'rotate-0 ')
                    }
                >
                    {ICONS.expand_more}
                </div>
            </div>
            <div
                className={
                    `px-4 text-lg overflow-hidden origin-top ${TRANSITION} ` +
                    'flex flex-col items-center justify-start gap-y-4 ' +
                    (open ? 'max-h-108 sm:max-h-72 my-4 ' : 'max-h-0 py-0 ')
                }
            >
                {props.scheduleDay.Events.map((e, i) => (
                    <div
                        key={i}
                        className={
                            'flex flex-row items-center w-full text-base text-gray-800 ' +
                            (i % 2 == 0 ? 'opacity-80 ' : 'opacity-60 ')
                        }
                    >
                        <div className='flex-shrink-0 mr-2 w-30 font-weight-700'>
                            {e.Label}
                        </div>
                        <div
                            className='self-stretch flex-grow font-weight-500 '
                            dangerouslySetInnerHTML={{
                                __html: e.Description.replace(/\n/g, '<br/>'),
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
