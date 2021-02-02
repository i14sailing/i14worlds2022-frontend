import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { sortBy } from 'lodash';
import ContactCard from '../components/contact-us-page/contact-card';

const ContactList = (props: { contacts: ContactNode[] }) => (
    <div className={'grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4'}>
        {sortBy(props.contacts, ['Role', 'Country', 'Name']).map(
            (contact: ContactNode, i: number) => (
                <ContactCard key={i} contact={contact} />
            )
        )}
    </div>
);
export default function Page() {
    const { allStrapiContact, allStrapiCountryHost } = useStaticQuery(query);
    const { nodes: contacts } = allStrapiContact;
    const { nodes: countryHosts } = allStrapiCountryHost;

    return (
        <div className='mb-32'>
            <h2 className='mt-12 mb-8 text-gray-800'>Country Hosts</h2>
            {countryHosts.length > 0 && <ContactList contacts={countryHosts} />}
            {countryHosts.length === 0 && (
                <div className='text-lg italic text-gray-800 font-weight-500'>
                    No country hosts yet
                </div>
            )}
            <h2 className='mt-12 mb-8 text-gray-800'>Contact Us</h2>
            {contacts.length > 0 && <ContactList contacts={contacts} />}
            {contacts.length === 0 && (
                <div className='text-lg italic text-gray-800 font-weight-500'>
                    No contacts yet
                </div>
            )}
        </div>
    );
}

const query = graphql`
    query MyQuery {
        allStrapiContact {
            nodes {
                Email
                Name
                Role
                Image {
                    publicURL
                }
            }
        }
        allStrapiCountryHost {
            nodes {
                Country
                Name
                Email
                Image {
                    publicURL
                }
            }
        }
    }
`;

type ContactNode = {
    Name: string;
    Email: string;
    Role?: string;
    Country?: string;
    Image: {
        publicURL: string;
    };
};
