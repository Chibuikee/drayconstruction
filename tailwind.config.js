/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xxxs: "400px",
        xxs: "500px",
        xs: "540px",
        s: "600px",
        sm: "640px",
        m: "700px",
        md: "768px",
        mmd: "800px",
        pc: "900px",
        penfedL: "992px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px",
      },
      fontFamily: {
        inter: ["var( --font-inter)"],
        poppins: ["var(--font-poppins)"],
        hind: ["var(--font-hind)"],
      },
    },
  },
  plugins: [],
};
