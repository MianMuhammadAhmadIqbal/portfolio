import project1 from "../assets/projects/todo-app.png";
import project2 from "../assets/projects/github-finder.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/ai-app-interview.png";

export const HERO_CONTENT = `I am an enthusiastic front-end developer with hands-on experience in crafting dynamic and engaging web applications. I have developed a solid foundation in front-end technologies, including HTML, CSS, JavaScript, and React. My goal is to leverage my growing expertise to contribute to innovative projects that enhance user experiences and drive business success.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Frontend Developer and Computer Science student at KFUEIT, driven by a passion for building clean, efficient, and user-friendly web applications. Backed by formal certified training in web development from 2024, I have developed strong, hands-on expertise in core frontend technologies including HTML5, CSS3, JavaScript (ES6+), and React. My engineering journey is fueled by a deep curiosity for software architecture and an ongoing commitment to mastering modern frameworks. I thrive on solving complex algorithmic problems, persisting data dynamically, and collaborating on open-source repositories. Outside of writing code, I actively explore emerging technologies and continuously refine my frontend engineering toolkit.`;

export const EDUCATION = [
  {
    degree: "Bachelor of Science in Computer Science (BSCS)",
    institution:
      "Khwaja Fareed University of Engineering & Information Technology (KFUEIT)",
    duration: "2024 - Present (Expected Graduation: 2028)",
    description:
      "Building strong foundational roots in software engineering, algorithms, and application architectures.",
    coursework: [
      "Artificial Intelligence",
      "Software Engineering",
      "Database Management Systems",
      "Probability & Statistics",
    ],
  },
];
export const EXPERIENCES = [
  {
    year: "2024",
    role: "Trainee Frontend Developer",
    company: "Promoteez International IT Training Institute",
    description:
      "Completed comprehensive hands-on web development training. Focused on translating UI layouts into responsive, accessible code web structures and mastering core engineering principles through building personal and task management applications.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "React JS",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Task Management To-Do Application",
    image: project1,
    description:
      "A highly functional productivity application featuring full client-side state persistence. Supports comprehensive CRUD task actions, including creation, inline editing, status toggles, and item deletion.",
    technologies: ["HTML5", "CSS3", "JavaScript (ES6+)"],
    link: "https://mianmuhammadahmadiqbal.github.io/todo/",
    githubLink: "https://github.com/MianMuhammadAhmadIqbal/todo",
  },

  {
    title: "GitHub Finder",
    image: project2,
    description:
      "GitHub Finder is a web application that uses the GitHub API to search for user profiles and instantly display their real-time statistics, bio, and latest repositories.",
    technologies: ["HTML", "CSS", "Javascript"],
    link: "https://github-profile-finder-jet.vercel.app/",
    githubLink:
      "https://github.com/MianMuhammadAhmadIqbal/github-profile-finder",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "Tailwind CSS", "React"],
  },
  {
    title: "AI Interview Prep App",
    image: project4,
    description:
      "An AI-powered interview preparation application that generates real interview questions based on selected topic and difficulty level. Uses Claude AI to evaluate answers and provide detailed feedback with scores.",
    technologies: ["React", "Tailwind CSS", "Claude AI", "Vite"],
    link: "https://ai-interview-prep-inky-theta.vercel.app/",
    githubLink: "https://github.com/MianMuhammadAhmadIqbal/ai-interview-prep",
  },
];

export const CONTACT = {
  address: "Chak 114/p Rahim Yar Khan PUNJAB",
  phoneNo: "+92 314 967111 4",
  email: "ahmad70iqbal@gmail.com",
};
