const path = require('path');

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
    ],
};
