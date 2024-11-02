import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap,LuBookCopy, LuBook, LuCoffee, LuCode, LuCodesandbox} from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import customerwebsite from "@/public/customerwebsite.png";
import mobcustomer from "@/public/mobcustomer.jpg";
import landingpage from "@/public/landingpage.png";
import landing from "@/public/landing.png";
import rmtdevImg1 from "@/public/rmtdev1.png";
import niftron from "@/public/niftron.png";
import niftron1 from "@/public/niftron1.png";
import supplierMob from "@/public/supplierMob.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Associate Software/DevOps Engineer",
    location: "Col, Sri Lanka",
    company:'Apple Holidays DS / Aahaas',
    description:
      "Experienced in optimizing application quality and usability, leading development teams, and implementing responsive web and mobile solutions using React and React Native. Proficient in troubleshooting, UI/UX collaboration, containerization with Docker, and performance monitoring.",
    icon: React.createElement(FaReact),
    date: "2023 Sept - Present",
  },
  {
    title: "Junior Software Engineer",
    location: "Col, Sri Lanka",
    company:'Apple Holidays DS / Aahaas',
    description:
      "Created intuitive UI for mobile apps, documented release versions, integrated APIs for performance enhancement, and conducted thorough testing for functionality.",
      icon: React.createElement(FaReact),
    date: "2022 Aug - 2023 Aug",
  },
  {
    title: "Intern Software Engineer",
    location: "Col, Sri Lanka",
    company:'Niftron',
    description:
      "Led infrastructure testing, evaluated technologies, implemented blockchain solutions, integrated IPFS, managed product lifecycles, and organized development projects.",
      icon: React.createElement(FaReact),
    date: "2021 June - 2022 July",
  },
  {
    title: "BSc (Hons) in Computer Science & Software Engineering",
    company: "University of Bedfordshire",
    location:'Luton, UK',
    description:
      "Graduated with a First Class Honors degree in Computer Science & Software Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 Sept - 2022 Sept",
  },
  {
    title: "Higher National Diploma in Infomation Technology",
    company: "SLIIT Academy",
    location:'Col, Sri Lanka',
    description:
    "Completed a two-year program in software development, covering key programming aspects.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 June - 2021 Aug",
  },
  {
    title: "CCNA Routing & Switching",
    company: "WinSys City Campus",
    location:'Col, Sri Lanka',
    description:
    "Completed Routing & Switching training, gaining expertise in network fundamentals, IP connectivity, and troubleshooting.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 Jan - 2018 June",
  },
] as const;

export const projectsData = [
  {
    title: "E-Commerce Mobile App",
    subTitle:"Aahaas",
    description:
      // "I worked as a frontend developer on this startup project for 2 years. Users can plan and book their stays from Zero to Hero via this Mobile Application",
      "It is a travel and tourism platform offering personalized experiences, booking options, and lifestyle services tailored for travelers, enhancing convenience and discovery.",
    tags: ["React Native", "Laravel", "MySQL", "OpenAI", "Android", "iOS"],
    imageUrl: rmtdevImg1,
  },
  {
    title: "Mobile App - Supplier Experience",
    subTitle:"Aahaas",
    description:
      "It connects suppliers with the Aahaas platform, allowing them to manage products, orders, and inventory seamlessly for travel and tourism services.",
      tags: ["React Native", "Laravel", "Expo", "MySQL", "OpenAI","Android", "iOS"],
    imageUrl: supplierMob,
  },
  {
    title: "E-Commerce Web Application",
    subTitle:"Aahaas",
    description:
      "It is a travel and tourism platform offering personalized experiences and services, developed for seamless, user-friendly browsing.",
    tags: [ "Next.js", "API", "Bootstrap", "Laravel", ],
    imageUrl: customerwebsite,
  },
  {
    title: "Landing Page",
    subTitle:"Aahaas",
    description:
      "The Aahaas landing page is a welcoming, informative site showcasing the brand's travel and tourism services, optimized for user engagement.",
    tags: ["HTML", "CSS", "SCSS","Git", "Bootstrap", "JavaScript", ],
    imageUrl: landing,
  },
  {
    title: "Doc Tracker",
    subTitle:"Niftron",
    description:
      "It is a web app for efficient document upload, organization, and tracking, offering secure and streamlined document management.",
    tags: ["MongoDB",  "ExpressJS", "ReactJS", "NodeJS", "Bootstrap", "Git", ""  ],
    imageUrl: niftron1,
  },
] as const;

export const skillsData = [
  // Frontend
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind",
  "Bootstrap",
  "Figma",
  "Adobe Photoshop",
  "Adobe XD",

  // Backend
  "Node.js",
  "ExpressJS",
  "Rest API",
  "Laravel",
  "PHP",

  // Programming Languages
  "C++",

  // DevOps & Cloud
  "Docker",
  "NGINX",
  "CI/CD",
  "UI/UX",
  "EC2",
  "IAM",
  "S3",
  "Linux",
  "Zabbix",
  "Cloud Watch",
  "RDS",
  "MongoDB",
  "MS SQL",
  "Lambda",
  "Cloudflare",
  "Digital Ocean",

  // CMS & Tools
  "WordPress",
  "Wix Creator",
  "Trello",
  "Jira",

  // Mobile Development
  "Android Studio",
  "XCode 15",

  // Version Control
  "Github",
  "Gitlab",

  // Other Skills
  "Technical Writing",
  "Google Analytics",
  "Google Tag Manager",
  "Firebase",
  "Google APIs",
  "ChatGPT",
] as const;
