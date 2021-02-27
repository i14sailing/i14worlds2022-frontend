require('dotenv').config({
    path: `.env`,
});
const colors = require('tailwindcss/colors');


// https://coolors.co/0d3b66-faf0ca-f4d35e-ee964b-f95738

module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    purge: {
        enabled: process.env.PURGE_TAILWIND === "true",
        content: [
            './src/**/*.js',
            './src/**/*.jsx',
            './src/**/*.ts',
            './src/**/*.tsx',
        ],
    },
    theme: {
        extend: {
            transitionProperty: {
                'size': 'margin, padding, width, height, max-height',
                'size-colors': 'margin, padding, width, height, text-color, background-color, box-shadow',
            },
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                gray: colors.blueGray,
                rose: colors.rose,
                blue: colors.blue,
                green: colors.green,
                yellow: colors.amber,
                orange: colors.orange,
                red: colors.red,
            },
            spacing: {
                     '5%':  '5%',
                    '10%': '10%',
                    '15%': '15%',
                    '20%': '20%',
                    '25%': '25%',
                    '30%': '30%',
                    '35%': '35%',
                    '40%': '40%',
                    '45%': '45%',
                    '50%': '50%',
                    '55%': '55%',
                    '9/16': '56.25%',
                    '60%': '60%',
                    '65%': '65%',
                    '70%': '70%',
                    '75%': '75%',
                    '80%': '80%',
                    '85%': '85%',
                    '90%': '90%',
                    '95%': '95%',
                    '100%': '100%',
                    
                  '5vh':   '5vh',
                 '10vh':  '10vh',
                 '15vh':  '15vh',
                 '20vh':  '20vh',
                 '25vh':  '25vh',
                 '30vh':  '30vh',
                 '35vh':  '35vh',
                 '40vh':  '40vh',
                 '45vh':  '45vh',
                 '50vh':  '50vh',
                 '60vh':  '60vh',
                 '70vh':  '70vh',
                 '80vh':  '80vh',
                 '90vh':  '90vh',
                '100vh': '100vh',
                  '5vw':   '5vw',
                 '10vw':  '10vw',
                 '15vw':  '15vw',
                 '20vw':  '20vw',
                 '25vw':  '25vw',
                 '30vw':  '30vw',
                 '35vw':  '35vw',
                 '40vw':  '40vw',
                 '45vw':  '45vw',
                 '50vw':  '50vw',
                 '55vw':  '55vw',
                 '60vw':  '60vw',
                 '65vw':  '65vw',
                 '70vw':  '70vw',
                 '75vw':  '75vw',
                 '80vw':  '80vw',
                 '85vw':  '85vw',
                 '90vw':  '90vw',
                 '95vw':  '95vw',
                '100vw': '100vw',

                 '12':  '3.0rem',
                 '14':  '3.5rem',
                 '16':  '4.0rem',
                 '18':  '4.5rem',
                 '20':  '5.0rem',
                 '21':  '5.25rem',
                 '22':  '5.5rem',
                 '24':  '6.0rem',
                 '30':  '8.5rem',
                 '56': '14.0rem',
                 '58': '14.5rem',
                 '60': '15.0rem',
                 '62': '15.5rem',
                 '64': '16.0rem',
                 '66': '16.5rem',
                 '68': '17.0rem',
                 '70': '17.5rem',
                 '72': '18.0rem',

                '108': '27.0rem',
                '124': '31.0rem',
                '126': '31.5rem',
                '128': '32.0rem',
                '130': '32.5rem',
                '132': '33.0rem',
                '192': '48.0rem',
                '256': '64.0rem',
                '260': '65.0rem',

                 '90': '22.5rem',
                 '96': '24rem',
                '160': '40.0rem',
                
                '1/4': '0.0625rem',
                '1/2': '0.125rem',
                '3/4': '0.1875rem',
                '5/4': '0.3125rem',
                '3/2': '0.375rem',
                '7/4': '0.4375rem',
            },
        },
    },
    plugins: [],
};