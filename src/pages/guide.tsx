import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { sortBy } from 'lodash';
import ScheduleDayRow from '../components/guide-page/schedule-day-row';
import { ScheduleDay } from 'src/utils/types';

const Schedule = (props: { days: ScheduleDay[] }) => (
    <div className={'w-full'}>
        {sortBy(props.days, ['Date']).map((day: ScheduleDay, i: number) => (
            <ScheduleDayRow
                key={day.Date}
                scheduleDay={day}
                first={i === 0}
                last={i === props.days.length - 1}
            />
        ))}
    </div>
);
export default function Page() {
    const { allStrapiScheduleDay } = useStaticQuery(query);
    const { nodes: days } = allStrapiScheduleDay;

    return (
        <>
            <h2 className='mx-auto mb-6 text-gray-800 md:mb-8 w-60 md:w-auto'>
                Preliminary Schedule
            </h2>
            {<Schedule days={days} />}
        </>
    );
}

const query = graphql`
    query ScheduleQuery {
        allStrapiScheduleDay {
            nodes {
                Date
                Events {
                    Description
                    Label
                }
                Label
                Tags {
                    Name
                }
            }
        }
    }
`;
