// projectdetails.js

import blogpost from "../Assets/image/Blog-post.png";
import countryApi from "../Assets/image/country-API.png";
import manage from "../Assets/image/manage-landing-page.png";
import rpsgame from "../Assets/image/R-P-S-game.png";
import filter from "../Assets/image/job-filter.png";
import space from "../Assets/image/space-landing-page.png";
import taskmanger from "../Assets/image/task-manager.png";

export const projectdetails = [
  {
    id: 1,
    name: "REST Countries API",
    img: countryApi,
    title: "REST Countries API with color theme switcher",
    description:
      "The  challenge was to integrate with the [REST Countries API] to pull country data and display it like in the designs.Also,Your users should be able to See all countries from the API on the homepage, Search for a country using an `input` field, Filter countries by region etc",
    year: "2024",
    liveUrl: "https://countriesrestapii.netlify.app/",
    githubUrl: "https://github.com/INIstheguyy/REST-API-countries",
  },
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
    id: 3,
    name: "Blog-post",
    img: blogpost,
    title: "Blog-post web app",
    description:
      "I created a blog-post using react. The website performs ADD,DELETE & POST function using axios and stores data using a third-party DBMS.",
    year: "2023",
    liveUrl: "https://dnblogpost.netlify.app/",
    githubUrl: "https://github.com/INIstheguyy/Blog-post",
  },
  {
    id: 4,
    name: "Job-listing",
    img: filter,
    title: "static-job-listings",
    description:
      "I built a job listing page getting it looking as close to the design as possible.The main functionality of this project is, it enables users to Filter job listings based on the categories,To add a filter, the user needs to click on the tablets on the right side of the listing on desktop or the bottom on mobile. For each filter added, only listings containing all selected filters should be returned.",
    year: "2023",
    liveUrl: "https://dnbjoblistingg.netlify.app",
    githubUrl: "https://github.com/INIstheguyy/job-listing",
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
];
