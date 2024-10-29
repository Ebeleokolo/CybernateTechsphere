module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightblue: "#4A72FF",
        lighterblue: "#ECF5FF",
        mainblue: "#22346E",
        gray: {
          DEFAULT: "#A0AEC0", // This is a medium gray
          dark: "#4A5568", // Darker gray
          light: "#E2E8F0", // Lighter gray
          extralight: "#FAFAFA",
          slategrey: "#22346E1A",
          greenishblue: "#566FC2",
          greyish: "#D9D9D933",
        },
        navyblue: "#001F54",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    fontSize: {
      "25px": "25px",
      "31px": "31px",
      "32px": ["32px", "48px"],
      "35px": ["35px"],
      "50px": ["50px", "64px"],
    },
    letterSpacing: {
      "2%": "0.02em",
    },
    lineHeight: {
      32.5: "32.5px",
    },
    fontWeight: {
      700: 700,
      600: 600,
    },
  },
  plugins: [],
};
