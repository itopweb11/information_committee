const options = require("./config"); //options from config.js

const allPlugins = {
  typography: require("@tailwindcss/typography"),
  forms: require("@tailwindcss/forms"),
  containerQueries: require("@tailwindcss/container-queries"),
};

const plugins = Object.keys(allPlugins)
  .filter((k) => options.plugins[k])
  .map((k) => {
    if (k in options.plugins && options.plugins[k]) {
      return allPlugins[k];
    }
  });

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        'boxShadow': '0 5px 40px 0 rgba(1, 3, 8, 0.10)',
        'boxShadowBtn': '0px 5px 40px 0px rgba(1, 3, 8, 0.10)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'custom-gradient': 'linear-gradient(180deg, #0B162A 0%, #010308 100%)',
        'backgroundText': 'rgba(8, 108, 128, 0.10)',
      },
      colors: {
        'custom-blue': '#0B162A',
        'custom-dark': '#010308',
      },
      backgroundColor: {
        'backgroundMenu': 'rgba(255, 255, 255, 0.04)',
        'backgroundQuote': 'rgba(8, 108, 128, 0.10)',
      },
    },
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(7.5px)',
    },
  },
  plugins: plugins,
};
