import {
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  Wipro,
  ComingSoon,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: reactjs,
  },
  {
    title: "Backend Developer",
    icon: nodejs,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
 
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Project Engineer",
    company_name: "Wipro Ltd.",
    icon: Wipro,
    iconBg: "#383E56",
    date: "May 2022 - Present",
    points: [
      
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Coming Soon.",
    name: "Coming Soon #1",
    designation: "CTO",
    company: "xyz",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Coming Soon.",
    name: "Coming Soon #2",
    designation: "COO",
    company: "def",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Coming Soon.",
    name: "Coming Soon #3",
    designation: "Founder",
    company: "abc",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
  },
];

const projects = [
  {
    name: "Coming Soon",
    description: "",
      // "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      // {
      //   name: "react",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "mongodb",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "tailwind",
      //   color: "pink-text-gradient",
      // },
    ],
    image: ComingSoon,
    source_code_link: "https://github.com/",
  },
  {
    name: "Coming Soon",
    description: "",
      // "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      // {
      //   name: "react",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "mongodb",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "tailwind",
      //   color: "pink-text-gradient",
      // },
    ],
    image: ComingSoon,
    source_code_link: "https://github.com/",
  },
  {
    name: "Coming Soon",
    description: "",
      // "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
    //   {
    //     name: "react",
    //     color: "blue-text-gradient",
    //   },
    //   {
    //     name: "restapi",
    //     color: "green-text-gradient",
    //   },
    //   {
    //     name: "scss",
    //     color: "pink-text-gradient",
    //   },
    ],
    image: ComingSoon,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };