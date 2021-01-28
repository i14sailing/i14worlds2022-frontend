import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { sortBy } from 'lodash';
import ContactCard from '../components/contact-us-page/contact-card';

const Schedule = (props: { days: ScheduleDay[] }) => (
    <div className={'w-70% mx-15% grid grid-cols-2 gap-x-4 gap-y-4'}>
        {sortBy(props.days, ['Date']).map((day: ScheduleDay, i: number) => (
            <div>{day.Date}</div>
        ))}
    </div>
);
export default function Page() {
    const { allStrapiScheduleDay } = useStaticQuery(query);
    const { nodes: days } = allStrapiScheduleDay;

    return (
        <div className='mb-32'>
            <h2 className='mt-12 mb-8 text-gray-800'>Preliminary Schedule</h2>
            {<Schedule days={days} />}
        </div>
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
            }
        }
    }
`;

type ScheduleDay = {
    Date: string;
    Label: string;
    Events: {
        label: string;
        description: string;
    }[];
};
