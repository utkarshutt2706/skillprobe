import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f3f0f9',
                    100: '#e1d8f2',
                    200: '#c8b6eb',
                    300: '#a17fe5',
                    400: '#7f4be6',
                    500: '#5e17eb',
                    600: '#5111ce',
                    700: '#420ea9',
                    800: '#330b83',
                    900: '#24085d',
                },
                secondary: {
                    100: '#f0f6e4',
                    200: '#e0efc1',
                    300: '#cdeb92',
                    400: '#bbe862',
                    500: '#a4eb19',
                    600: '#91ce16',
                    700: '#6f9c16',
                },
                accent: {
                    teal: {
                        400: '#67e4e4',
                        500: '#19e5e5',
                        600: '#0fbcbc',
                    },
                    pink: {
                        400: '#e895cd',
                        500: '#e467ba',
                        600: '#df1f9f',
                    },
                    orange: {
                        400: '#efb275',
                        500: '#ef9942',
                        600: '#f27f0c',
                    },
                },
                neutral: {
                    50: '#f9f9fa',
                    100: '#edeced',
                    200: '#d8d7d9',
                    300: '#bebcc1',
                    400: '#a4a2a9',
                    500: '#8a8691',
                    600: '#706b79',
                    700: '#57535f',
                    800: '#3e3a44',
                    900: '#24222a',
                },
                success: {
                    400: '#70db9c',
                    500: '#2cd271',
                    600: '#1ead5a',
                },
                warning: {
                    400: '#efc675',
                    500: '#efb542',
                    600: '#f2a50c',
                },
                error: {
                    400: '#e87c85',
                    500: '#e23644',
                    600: '#ce1626',
                },
                info: {
                    400: '#7cb2e8',
                    500: '#368ce2',
                    600: '#1672ce',
                },
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
                display: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out',
                'slide-up': 'slideUp 0.6s ease-out',
                float: 'float 3s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
            },
        },
    },
    plugins: [],
};

export default config;
