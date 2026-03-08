import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2A6B5A',
          light: '#3A8B74',
          dark: '#1E4F42',
          muted: 'rgba(42, 107, 90, 0.06)',
          300: 'rgba(42, 107, 90, 0.06)',
          700: '#2A6B5A',
          750: '#3A8B74',
          800: '#1E4F42',
        },
        amber: {
          DEFAULT: '#D4A843',
          muted: 'rgba(212, 168, 67, 0.10)',
          text: '#9B7D31',
        },
        green: {
          DEFAULT: '#34A853',
          muted: 'rgba(52, 168, 83, 0.06)',
        },
        surface: {
          DEFAULT: '#FAFAF8',
          cream: '#F2F0EC',
        },
        dark: '#1A1A2E',
        navy: '#141428',
        muted: {
          DEFAULT: '#6B7280',
          light: '#9CA3AF',
        },
        border: {
          DEFAULT: 'rgba(26, 26, 46, 0.12)',
          light: 'rgba(26, 26, 46, 0.08)',
        },
        // Category colors
        cat: {
          metabolic: '#D4A843',
          hormonal: '#2A6B5A',
          inflammation: '#C45B4A',
          nutrients: '#4A9B6E',
          cardiovascular: '#3B6FA0',
          thyroid: '#7B5EA7',
          organ: '#5C6B7A',
        },
        // Secondary/Accent (kept for backward compat)
        secondary: {
          300: '#FEF9EF',
          500: '#F3C060',
        },
        // Neutrals
        neutral: {
          0: '#FAFAF8',
          50: '#F2F0EC',
          100: '#F2F0EC',
          200: 'rgba(26, 26, 46, 0.12)',
          300: 'rgba(42, 107, 90, 0.06)',
          500: '#6B7280',
          800: '#1A1A2E',
          900: '#1A1A2E',
        },
        // Feedback
        feedback: {
          error: '#C83C3C',
          warning: '#FFB136',
          success: '#34A853',
        },
        // Focus ring
        focus: 'rgba(42, 107, 90, 0.25)',
      },
      fontFamily: {
        sans: ['General Sans', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'Times New Roman', 'serif'],
      },
      fontSize: {
        'display': ['32px', { lineHeight: '40px', letterSpacing: '-0.02em', fontWeight: '600' }],
        'display-md': ['40px', { lineHeight: '48px', letterSpacing: '-0.02em', fontWeight: '600' }],
        'display-lg': ['48px', { lineHeight: '56px', letterSpacing: '-0.02em', fontWeight: '600' }],
        'headline-xl': ['32px', { lineHeight: '1.2', fontWeight: '700' }],
        'headline-lg': ['2.25rem', { lineHeight: '1.15', fontWeight: '600' }],
        'headline-md': ['1.875rem', { lineHeight: '1.25', fontWeight: '600' }],
        'headline-sm': ['1.5rem', { lineHeight: '1.25', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.625' }],
        'body': ['1rem', { lineHeight: '1.5' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'label': ['0.875rem', { lineHeight: '1.5', fontWeight: '500' }],
        'caption': ['0.75rem', { lineHeight: '1.5' }],
        'legal': ['11px', { lineHeight: '1.4', fontWeight: '400' }],
      },
      maxWidth: {
        content: '740px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
        },
      },
      spacing: {
        '4.5': '18px',
        '13': '52px',
        '15': '60px',
        '18': '72px',
      },
      borderRadius: {
        DEFAULT: '8px',
        lg: '10px',
        xl: '12px',
        full: '9999px',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 4px 12px rgba(0, 0, 0, 0.12)',
        'button': '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'slide-up': 'slideUp 0.3s ease-out',
        'fade-in': 'fadeIn 0.2s ease-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'scroll': 'scroll 20s linear infinite',
        'marquee': 'marquee 30s linear infinite',
        'word-fade-in': 'wordFadeIn 0.5s ease-out forwards',
        'word-fade-out': 'wordFadeOut 0.3s ease-in forwards',
        'tray-up': 'trayUp 0.35s cubic-bezier(0.34,1.56,0.64,1) forwards',
        'bmi-bar': 'bmiBar 0.8s ease-out forwards',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        wordFadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        wordFadeOut: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-8px)' },
        },
        trayUp: {
          '0%': { opacity: '0', transform: 'translateY(16px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        bmiBar: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--bmi-pct)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
