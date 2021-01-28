const path = require('path');
require('dotenv').config({
    path: `.env`,
});

module.exports = {
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/strapi-images`,
            },
        },
        {
            resolve: 'gatsby-plugin-root-import',
            options: {
                src: path.join(__dirname, 'src'),
                pages: path.join(__dirname, 'src/pages'),
                static: path.join(__dirname, 'static'),
            },
        },
        {
            resolve: 'gatsby-plugin-layout',
            options: {
                component: require.resolve('./src/components/layout'),
            },
        },
        {
            resolve: 'gatsby-source-strapi',
            options: {
                apiURL: process.env.API_URL || 'http://localhost:1337',
                contentTypes: ['contact', 'country-host', 'schedule-day'],
                queryLimit: 1000,
            },
        },
    ],
};
