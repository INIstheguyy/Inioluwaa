// projectdetails.js

import blogpost from "../Assets/image/Blog-post.png";
import countryApi from "../Assets/image/country-API.png";
import manage from "../Assets/image/manage-landing-page.png";
import rpsgame from "../Assets/image/R-P-S-game.png";
import filter from "../Assets/image/job-filter.png";
import space from "../Assets/image/space-landing-page.png";
import taskmanger from "../Assets/image/task-manager.png";
import festival from "../Assets/image/screen-capture (5).mp4";
import exam2 from "../Assets/image/screen-capture (4).mp4";
import pattways from "../Assets/image/pattways.png";

export const projectdetails = [

  {
    id: 2,
    name: "Task-Manager",
    img: taskmanger,
    title: "Task Management App",
    description:
      "A task management web application developed with React, TypeScript, and Vite. It features task creation, organization, and tracking within a responsive interface, showcasing best practices in modern React development.",
    year: "2025",
    liveUrl: "https://task-mgt-proj.netlify.app/",
    githubUrl: "https://github.com/INIstheguyy/task-mgt-app",
  },

  {
    id: 5,
    name: "Rock-paper-scissors",
    img: rpsgame,
    title: "Rock-paper-scissors-game",
    description:
      "This game was built using HTML, CSS & Vanila JavaScript. The brain behind this was using a javascript math method to pick a random number between the range of 1-3 to get the computers selection against the player.",
    year: "2022",
    liveUrl: "https://dnbrpsgame.netlify.app/",
    githubUrl: "https://github.com/INIstheguyy/Rock-paper-scissors-game",
  },
  {
    id: 6,
    name: "manage-landing-page",
    img: manage,
    title: "manage-landing-page-master",
    description:
      "I built a responsive landing page whilist trying to grasp the basic concept of CSS.",
    year: "2022",
    liveUrl: "https://dnbmanagelandingpage.netlify.app/",
    githubUrl: "https://github.com/INIstheguyy/manage-landing-page-master",
  },
  {
    id: 7,
    name: " Space tourism website",
    img: space,
    title: "space-tourism-landing-page ",
    description:
      "The challenge was to build out this multi-page space tourism website,get it looking as close to the design as possible & enable users to view the optimal layout for each of the website's pages depending on their device's screen size",
    year: "2023",
    liveUrl: "https://dnbspacetourism.netlify.app/",
    githubUrl: "https://github.com/INIstheguyy/space-tourism-landing-page",
  },
  {
    id: 8,
    name: "Exam Sense",
    img: exam2,
    title: "Mock WASSCE AI Exam web app ",
    description:
      "A smart practice testing platform that helps WASSCE candidates identify their weak topics through AI-powered analysis and get personalized study recommendations - turning practice tests into targeted learning paths",
    year: "2025",
    liveUrl: "https://exam-sense.netlify.app/",
    githubUrl: "https://github.com/ExamSense/ExamSense.git",
  },
  {
    id: 9,
    name: "Festival Twin Finder",
    img: festival,
    title: "Festival Twin Finder",
    description:
      "Festival Twin Finder is an AI that translates culture, not just words. Upload any festival - whether it's a text description, photo, or video - and get equivalent experiences in your country within seconds.",
    liveUrl: "https://festival-twin-finder.netlify.app/",
    githubUrl: "https://github.com/ExamSense/festival-twin-seeker",
  },
  {
    id: 10,
    name: "Pattways",
    img: pattways,
    title: " A personalized career discovery tool",
    description:"An AI-powered career discovery tool that helps people find career paths they didn't know existed by understanding their unique context through intelligent conversation.",
    liveUrl: "https://pattways.netlify.app/",
    githubUrl: "https://github.com/INIstheguyy/career-compass",
  },
];
