import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { sortBy } from 'lodash';

export default function Home() {
    const { allStrapiContact } = useStaticQuery(query);
    let { nodes } = allStrapiContact;

    if (nodes.length > 0) {
        return (
            <>
                <div
                    className={
                        'mx-auto w-full mt-4 mb-8 ' +
                        'sm:w-65vw ' +
                        'md:w-55vw ' +
                        'lg:mb-16 lg:w-45vw ' +
                        'xl:mt-6 xl:mb-24 xl:w-35vw ' +
                        '2xl:mt-8 2xl:mb-32 2xl:w-30vw '
                    }
                >
                    {sortBy(nodes, ['role']).map(
                        (contact: ContactNode, i: number) => (
                            <div>{contact.name}</div>
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
                    relativePath
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
        relativePath: string;
    };
};
