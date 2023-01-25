/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        demoColor: "#489fd9",
        //dark background for code block
        "primary-header": "#741ce8",
        //socil media icon
        github: "#171515",
        linkedin: "#1d66c2",
        facebook: "#2677f2",
        twiter: "#2ba1f2",
        behance: "#2557ff",
        youtube: "#FF0000",
      },
    },
  },
  container: {
    center: true,
  },
  plugins: [require('flowbite/plugin')],
}
