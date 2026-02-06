/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#000000',
                secondary: '#FFFFFF',
                accent: {
                    pink: '#FF3366',
                    cyan: '#00D9FF',
                    gold: '#FFD700'
                },
                success: '#10B981',
                warning: '#F59E0B',
                error: '#EF4444',
                neutral: '#6B7280'
            },
            fontFamily: {
                heading: ['Poppins', 'sans-serif'],
                body: ['Inter', 'sans-serif']
            },
            borderRadius: {
                'button': '6px',
                'card': '12px'
            },
            animation: {
                'bounce-subtle': 'bounce-subtle 0.6s ease-in-out',
                'slide-in': 'slide-in 0.3s ease-out',
                'fade-in': 'fade-in 0.2s ease-in',
                'pulse-glow': 'pulse-glow 2s ease-in-out infinite'
            },
            keyframes: {
                'bounce-subtle': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' }
                },
                'slide-in': {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(0)' }
                },
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' }
                },
                'pulse-glow': {
                    '0%, 100%': { boxShadow: '0 0 0 0 rgba(255, 51, 102, 0.4)' },
                    '50%': { boxShadow: '0 0 20px 5px rgba(255, 51, 102, 0.6)' }
                }
            },
            spacing: {
                '128': '32rem',
                '144': '36rem'
            },
            screens: {
                'xs': '475px'
            }
        },
    },
    plugins: [],
}
