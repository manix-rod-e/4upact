
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#5E3B6F',   // Pact Purple — brand kit exact
                secondary: '#3C2A4D', // Deep Violet — dark backgrounds
                teal: '#4ECDC4',      // Impact Teal — brand kit exact
                orange: {
                    DEFAULT: '#F7941D', // Growth Orange — brand kit exact
                    dark: '#D97E0F'
                },
                slate: {
                    950: '#0A0118',   // Ultra dark violet-black
                }
            },
            fontFamily: {
                display: ['"Roboto Condensed"', 'sans-serif'],
                sans: ['"Lato"', 'sans-serif'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
