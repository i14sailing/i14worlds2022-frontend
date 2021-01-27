const path = require('path');
require('dotenv').config({
    path: `.env`,
});

module.exports = {
    plugins: [
        'gatsby-plugin-react-helmet',
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
                contentTypes: ['contact'],
                queryLimit: 1000,
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
    ],
};
