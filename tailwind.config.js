const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        fontBase: ['primaryFont', 'sans-serif'],
        fontAlt: ['PP Neue Montreal', 'sans-serif'],
        cormorant: ['"Cormorant Upright"', 'serif'],
        opensans: ['"Open Sans"', 'sans-serif'],
      },
      colors:{
          primary:"#C02C2F",
          black:"#1E1E1E",
          secondary:"#E2E2E2",
          white:"#ffff",
          basic:"#FF6F61",
          origin:"#EF4444",
      },
      fontSize: {
        '6vw': '8vw',
      },
      keyframes: {
        textRotation: {
          to: {
            transform: 'rotate(360deg)',
          },
        },
        move: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
      animation: {
        textRotation: 'textRotation 8s linear infinite',
        'sliding-move': 'move 65s linear infinite',
        aurora: "aurora 60s linear infinite",
      },

    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}