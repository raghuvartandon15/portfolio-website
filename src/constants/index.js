import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  // tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,

} from "../assets";
  // tech
  import python from '../assets/tech/python.webp';
  import Mysql from '../assets/tech/Mysql.png';
  import java from '../assets/tech/java.png';
  import C_add_add from '../assets/tech/C_add_add.png';
  import C from '../assets/tech/C.png';
  import swift from '../assets/tech/swift.jpg';
  import seaborn from '../assets/tech/seaborn.png';
  import scikit from '../assets/tech/scikit.png';
  import tailwind from '../assets/tech/tailwind.png';
  import resAI from '../assets/resAI.png';
  import snake from '../assets/snake.webp';
  import scholar from '../assets/scholar.png';
  import dsa from '../assets/dsa.jpg';
  import asl from '../assets/asl.png';
  import aws from '../assets/tech/aws.png';
  import TensorFlow from '../assets/tech/Tensorflow.png';
  import rjs from '../assets/tech/reactjs.png';
  import pytorch from '../assets/tech/pytorch.jpg';
  
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
      title: "ML & AI Practitioner",
      icon: mobile,
    },
    {
      title: "Cloud Engineer",
      icon: backend,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Grade-8 guitarist",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "ReactJs",
      icon: rjs,
    },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "MySQL",
      icon: Mysql,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Figma",
      icon: figma,
    },
    {
      name: "PyTorch",
      icon: pytorch,
    },
    {
      name: "TensorFlow",
      icon: TensorFlow,
    },
    {
      name: "AWS",
      icon: aws,
    },
    // {
    //   name: "Swift",
    //   icon: swift,
    // },
    {
      name: "Seaborn",
      icon: seaborn,
    },
    {
      name: "scikit-learn",
      icon: scikit,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
  ];
  
  const experiences = [
    {
      title: "VBA Developer",
      company_name: "Pptgpt.me",
      icon: starbucks,
      iconBg: "#383E56",
      date: "July 2024 - September 2024",
      points: [
        "Developing and maintaining web applications using VBA and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    {
      title: "Full Stack Web Developer",
      company_name: "One Young India",
      icon: shopify,
      iconBg: "#383E56",
      date: "July 2024 - September 2024",
      points: [
        "Developing and maintaining web applications using Wix Studio and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    // {
    //   name: "music player",
    //   description:
    //     "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "mongodb",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "tailwind",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: carrent,
    //   source_code_link: "https://github.com/",
    // },
    {
      name: "Resume Screening AI System",
      description:
      "Developed an advanced Resume Screening AI System integrating NLP and neural networks for precise classification of resume types and tailored job recommendations. Implemented PDF-to-text conversion workflows and CI/CD pipelines and deployed the solution on Railway cloud for scalable recruitment automation.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "TensorFlow",
          color: "green-text-gradient",
        },
        {
          name: "NLP",
          color: "pink-text-gradient",
        },
      ],
      image: resAI,
      source_code_link: "https://github.com/raghuvartandon15/ResumeScreening",
    },
    {
      name: "Scholar Connect (Smart India Hackathon 2023)",
      description:
        "Finalist of Smart India Hackathon 2023 Senior Software Edition. Developed a centralized full-stack web portal for verifying students studying out-of-state, ensuring they receive scholarship benefits despite their institutions not being registered on their home state's portal.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JS",
          color: "pink-text-gradient",
        },
        {
          name: "Django",
          color: "blue-text-gradient",
        },
      ],
      image: scholar,
      source_code_link: "https://github.com/raghuvartandon15/SIH-23-project",
    },
    {
      name: "ShAIdes",
      description:
        "Developed shAIdes, a wireless smart home solution using Arduino Uno, Raspberry Pi, relays, and frameworks like YOLO and MediaPipe. Users wear camera-integrated glasses that detect household items like bulbs and recognize gestures to control them. The system streams video to a Raspberry Pi, which processes inputs and wirelessly signals the Arduino Uno to toggle devices, enabling seamless automation and interactivity.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "TensorFlow",
          color: "green-text-gradient",
        },
        {
          name: "OpenCV",
          color: "pink-text-gradient",
        },
        {
          name: "Mediapipe",
          color: "pink-text-gradient",
        },
        {
          name: "YOLO",
          color: "green-text-gradient",
        }
      ],
      image: asl,
      source_code_link: "https://github.com/raghuvartandon15/shAIdes",
    },
    {
      name: "Snake Game",
      description:
        "A basic and simple GUI based project in Java. Based on the game Snake and Apples. With responsive design and customizable settings. Players navigate the snake to consume apples while avoiding collisions, with increasing difficulty levels.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Swing",
          color: "green-text-gradient",
        },
        {
          name: "AWT",
          color: "pink-text-gradient",
        },
      ],
      image: snake,
      source_code_link: "https://github.com/raghuvartandon15/Snake-game",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };