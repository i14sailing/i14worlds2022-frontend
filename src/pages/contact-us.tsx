import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { sortBy } from 'lodash';
import ContactCard from '../components/contact-us-page/contact-card';

export default function Home() {
    const { allStrapiContact } = useStaticQuery(query);
    let { nodes } = allStrapiContact;

    if (nodes.length > 0) {
        return (
            <>
                <h2 className='mt-12 mb-8 text-gray-800'>Contact Us</h2>
                <div className={'w-full grid grid-cols-2 gap-x-4 gap-y-4'}>
                    {sortBy(nodes, ['role']).map(
                        (contact: ContactNode, i: number) => (
                            <ContactCard contact={contact} />
                        )
                    )}
                </div>
            </>
        );
    }

    return (
        <div className='w-full mt-8 center-content'>
            <div className='text-lg italic text-gray-800 font-weight-500'>
                No contacts yet
            </div>
        </div>
    );
}

const query = graphql`
    query MyQuery {
        allStrapiContact {
            nodes {
                email
                name
                role
                image {
                    childImageSharp {
                        original {
                            src
                        }
                    }
                }
            }
        }
    }
`;

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
