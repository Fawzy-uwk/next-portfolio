import { link } from "fs";


export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#Skills" },
  { name: "Experience", link: "#Experience" },
  { name: "Contact", link: "#contact" },

];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration and maintain open, clear communication at all times. ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.webp",
    spareImg: "",
  },
  {
    id: 2,
    title: "Fully flexible with time-zone communication.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I’m committed to ongoing growth and always strive to elevate my work.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "A tech enthusiast with a strong passion for development and innovation.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently learning and preparing for Node.js backend development.",
    description: "On the Path to be MERN Stack Developer",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "py-5 sm:py-0 lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Popcorn",
    des: "A React Js Projects that fetches a movies API with some other features",
    img: "/portfolio/Popcorn.webp",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/sass.svg"],
    link: "https://popcorn-2024.netlify.app/",
    repo: "https://github.com/Fawzy-uwk/popcorn",
  },
  {
    id: 2,
    title: "React Forecast App",
    des: "ReactJS project that`s a simulation of weather&forcasting apps using fetched data from openWeatherMap API",
    img: "/portfolio/ReactForecast.webp",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/sass.svg", "/api.svg"],
    link: "https://react-forecast-2024.netlify.app/",
    repo: "https://github.com/Fawzy-uwk/weather",
  },
  {
    id: 3,
    title: "ThreeJs Animation",
    des: "A React JS (vite) project using ThreeJS library that provides good animations and 3D effects.",
    img: "/portfolio/Three-JS-Animation.webp",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/three.svg"],
    link: "https://threejs-animation-4412fd.netlify.app",
    repo: "https://github.com/Fawzy-uwk/portfolio",
  },
  {
    id: 4,
    title: "Syncfusion Dashboard",
    des: "ReactJs project that displays cahrts and cards from syncfusion and gets data from a dummy data file as a simulation of a market",
    img: "/portfolio/Dashboard.webp",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/sass.svg"],
    link: "https://shopdash2024.netlify.app/",
    repo: "https://github.com/Fawzy-uwk/ShopDash",
  },
  {
    id: 5,
    title: "React Caht",
    des: "ReactJs project as simulation of chatting app with firebase firestore that stores chats and users with redux and redux toolkit for state management",
    img: "/portfolio/ReactChat.webp",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/sass.svg", "/firebase.svg"],
    link: "https://react-chat-2024.netlify.app/",
    repo: "https://github.com/Fawzy-uwk/chat",
  },
  {
    id: 6,
    title: "Google Search",
    des: "ReactJS project as a simulation of google search engine using google-search API to fetch results based on user queries",
    img: "/portfolio/google.webp",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/api.svg"],
    link: "https://google-search-2024.netlify.app/",
    repo: "https://github.com/Fawzy-uwk/google-search",
  },
  {
    id: 7,
    title: "Prayers Times",
    des: "A ReactJS project that fetches prayer times based on the user's location using an API.",
    img: "/portfolio/prayers-timing.webp",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/api.svg"],
    link: "https://prayers-timing-peach.vercel.app/",
    repo: "https://github.com/Fawzy-uwk/prayers-timing",
  },
  {
    id: 8,
    title: "Guess Word Game",
    des: "A React TS game where users guess a word based on hints, with a timer and score tracking.",
    img: "/portfolio/guess-word.webp",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/api.svg"],
    link: "https://guessingword-game-2025.netlify.app/",
    repo: "https://github.com/Fawzy-uwk/guess_word",
  },
  {
    id: 9,
    title: "Office Portfolio",
    des: "A NextJS portfolio website showcasing an Accounting Office with a modern design and responsive layout.and unique animations from framer-motion library.",
    img: "/portfolio/office-portfolio.webp",
    iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/js.svg", "/fm.svg"],
    link: "https://ahmed-abdelkawy.vercel.app/",
    repo: "https://github.com/Fawzy-uwk/office-portfolio",
  },

  {
    id: 10,
    title: "Task Manager",
    des: "A ReactJS task management app that allows users to create, edit, and delete tasks with a sleek UI and responsive design.",
    img: "/portfolio/Todo-App.webp",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg"],
    link: "https://todo-1432025.netlify.app/",
    repo: "https://github.com/Fawzy-uwk/todo",
  },
];



export const skills = [
  { name: "HTML", img: "/skills/html.svg", description: "Building semantic and accessible page structures." },
  { name: "CSS", img: "/skills/css.svg", description: "Styling responsive layouts with modern CSS techniques." },
  { name: "Sass", img: "/skills/sass.svg", description: "Writing clean, reusable, and scalable styles." },
  { name: "Tailwind CSS", img: "/skills/tail.svg", description: "Rapidly building custom designs with utility-first CSS." },
  { name: "Bootstrap", img: "/skills/bootstrap.svg", description: "Creating responsive UI components efficiently." },
  { name: "JavaScript", img: "/skills/js.svg", description: "Adding interactivity and dynamic behavior to applications." },
  { name: "TypeScript", img: "/skills/ts.svg", description: "Building safer and more maintainable codebases." },
  { name: "React", img: "/skills/react.svg", description: "Developing reusable components and modern SPAs." },
  { name: "WordPress", img: "/skills/wordpress.svg", description: "Customizing themes and managing content-driven websites." },
  { name: "Next.js", img: "/skills/next.svg", description: "Building server-side rendered and static web applications." },
];




export const workExperience = [
  {
    id: 1,
    title: "IT helpdesk - AA Accounting",
    desc: "Provided technical support and troubleshooting for office IT systems and software.",
    className: "md:col-span-2",
    thumbnail: "/Experience/exp1.svg",
  },
]

export const socialMedia = [
  { id: 1, img: "/git.svg", link: "https://github.com/Fawzy-uwk", color: "#333" },
  { id: 2, img: "/wha.svg", link: "https://wa.me/201095247585", color: "#25D366" },
  { id: 3, img: "/link.svg", link: "https://www.linkedin.com/in/fawzy-mohamed-501610236/", color: "#0A66C2" },
];



export const techStack = [

  "JavaScript",
  "TypeScript",
  "ReactJS",
  "NextJS",
  "TailwindCSS",

  "WordPress",

]
