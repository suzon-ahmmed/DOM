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
      backgroundImage: {
        s1: "url(../images/bg-cover.png), linear-gradient(90.42deg, #cc00c415 8.94%, #7d2ae815 54.02%, #00c4cc15 95.49%)",
        s2: "url(../images/bg-cover.png)",
      },
    },
  },
  container: {
    center: true,
  },
  plugins: [require("flowbite/plugin")],
};
