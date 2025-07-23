import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

// import components
import DownloadButton from "../common/components/DownloadButton/DownloadButton";
import IconButton from "../common/components/IconButton/IconButton";
import InputField from "../common/components/InputField/InputField";
import TextAreaField from "../common/components/TextAreaField/TextAreaField";
import SubmitButton from "../common/components/SubmitButton/SubmitButton";
import Loader from "../common/components/Loader/Loader";
// import icons
import { FaReact } from "react-icons/fa";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillHtml5,
  AiOutlineEye,
} from "react-icons/ai";
import {
  BiLogoGmail,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoRedux,
  BiLogoJava,
} from "react-icons/bi";
import { BsFacebook, BsGit, BsPuzzle } from "react-icons/bs";
import { TbBrandPython } from "react-icons/tb";
import { SiNumpy, SiPandas } from "react-icons/si";
import { GoGraph } from "react-icons/go";
import { RiSendPlaneFill } from "react-icons/ri";
import { SiPostman } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";

//import images

import Voyager from "../assets/images/Voyager.png";
import KartyFy from "../assets/images/KartyFy.png";
import MyGPT from "../assets/images/MyGPT.png";
import HotelLanding from "../assets/images/HotelLanding.png";
import Amazon from "../assets/images/Amazon.png";
// import style
import style from "./App.module.css";

const skills = [
  {
    name: "HTML 5",
    icon: <AiFillHtml5 size="25px" color="white" />,
    cssName: "html",
  },
  {
    name: "CSS 3",
    icon: <BiLogoCss3 size="25px" color="white" />,
    cssName: "css",
  },
  {
    name: "Java Script",
    icon: <BiLogoJavascript size="25px" color="white" />,
    cssName: "java-script",
  },

  {
    name: "React JS",
    icon: <FaReact size="25px" color="white" />,
    cssName: "react",
  },
  {
    name: "Redux ToolKit",
    icon: <BiLogoRedux size="25px" color="white" />,
    cssName: "redux",
  },
  {
    name: "Node JS",
    icon: <FaNode size="25px" color="white" />,
    cssName: "redux",
  },
  {
    name: "Express JS",
    icon: <SiExpress size="25px" color="white" />,
    cssName: "redux",
  },
  {
    name: "Mongodb",
    icon: <SiMongodb size="25px" color="white" />,
    cssName: "redux",
  },
  {
    name: "Git",
    icon: <BsGit size="25px" color="white" />,
    cssName: "git",
  },
  {
    name: "POSTMAN",
    icon: <SiPostman size="25px" color="white" />,
    cssName: "redux",
  },

  {
    name: "java",
    icon: <BiLogoJava size="25px" color="white" />,
    cssName: "java",
  },
  {
    name: "Python",
    icon: <TbBrandPython size="25px" color="white" />,
    cssName: "cpp",
  },
  {
    name: "Numphy",
    icon: <SiNumpy size="25px" color="white" />,
    cssName: "problem-solving",
  },
  {
    name: "Pandas",
    icon: <SiPandas size="25px" color="white" />,
    cssName: "problem-solving",
  },
  {
    name: "Matplotlib",
    icon: <GoGraph size="25px" color="white" />,
    cssName: "problem-solving",
  },
  {
    name: "Problem Solving",
    icon: <BsPuzzle size="25px" color="white" />,
    cssName: "problem-solving",
  },
];

const projects = [
  {
    name: "Voyager",
    link: "https://voyager-01.vercel.app",
    github: "https://github.com/GeekyAdnan125/Voyager_01.git",
    description:
      "Voyager is an advanced AI-powered travel assistant web application built with the MERN stack. It helps users explore destinations, plan trips, and access real-time assistance. Key features include a 24/7 AI chatbot for travel support, emergency medical info with local doctor listings, real-time weather updates, hidden destination gems, multilingual support, and a community forum.",
    image: Voyager,
    tags: [
      "MERN Stack",
      "AI Integration",
      "Real-time Data",
      "Responsive Design",
    ],
  },
  {
    name: "KartyFy",
    link: "https://karty-fy.vercel.app",
    github: "https://github.com/GeekyAdnan125/KartyFy.git",
    description:
      "KartyFy is a responsive frontend e-commerce web application built using React. It features a sleek product listing page, product detail views, cart management UI. Designed for an enhanced user experience, the app provides intuitive navigation and clean design.",
    image: KartyFy,
    tags: ["React", "E-commerce", "UI/UX", "Responsive Design"],
  },
  {
    name: "MyGPT",
    link: "https://my-gpt-five.vercel.app/",
    github: "https://github.com/GeekyAdnan125/MyGpt.git",
    description:
      "MyGPT is a custom AI chatbot application built using React and integrated with the Gemini API. Designed with a clean and responsive UI, the chatbot enables natural language interaction, providing intelligent responses based on user input.",
    image: MyGPT,
    tags: ["React", "AI Chatbot", "Gemini API", "Responsive Design"],
  },
  {
    name: "Hotel Landing Page",
    link: "https://geekyadnan125.github.io/Hotel/",
    github: "https://github.com/GeekyAdnan125/Hotel.git",
    description:
      "A visually appealing Hotel Landing Page built using HTML, CSS, and JavaScript to showcase core frontend and DOM manipulation skills. The project includes interactive sections such as image sliders, smooth navigation, and responsive design.",
    image: HotelLanding,
    tags: ["HTML/CSS", "JavaScript", "Landing Page", "Responsive Design"],
  },
  {
    name: "Amazon Clone (Desktop Only)",
    link: "https://amazon-com-mu.vercel.app",
    github: "https://github.com/GeekyAdnan125/amazon_clone.git",
    description:
      "A simple Amazon clone made using pure HTML and CSS for desktop view. This project replicates Amazon’s homepage layout, showcasing skills in semantic HTML, CSS Flexbox/Grid, and pixel-perfect design.",
    image: Amazon,
    tags: ["HTML", "CSS", "Destop view only"],
  },
];

function App() {
  const form = useRef();

  const [menu, setMenu] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(function () {
      emailjs
        .sendForm(
          "service_0mvhr04",
          "template_i6cp6oc",
          form.current,
          "_9HMh2aJEUSDr4u89"
        )
        .then((result) => {
          e.target.name.value = "";
          e.target.email.value = "";
          e.target.message.value = "";
        });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className={style.app}>
      {/* Navbar */}
      <div className={style.nav}>
        <a className={style.logo}>
          <FaReact color="var(--primary-main)" size="50px" />
          <h5>Adnan Alam</h5>
        </a>
        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
        <div className={style["menu-icon"]}>
          <input id="checkbox" className={style["checkbox2"]} type="checkbox" />
          <label
            className={`${style.toggle} ${style.toggle2}`}
            for="checkbox"
            onClick={() => setMenu(!menu)}
          >
            <div className={`${style.bars} ${style.bar4}`}></div>
            <div className={`${style.bars} ${style.bar5}`}></div>
            <div className={`${style.bars} ${style.bar6}`}></div>
          </label>
        </div>
      </div>
      {menu === true && (
        <ul className={style.menu}>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      )}

      {/* Home */}
      <div id="Home" className={style.home}>
        <div className={style["home-content"]}>
          <h1>HEY, I'M Adnan  </h1>
          <p>
            A passionate{" "}
            <span className="font-semibold text-blue-600">
              MERN Stack Developer
            </span>{" "}
            and
            <span className="font-semibold text-blue-600">
              {" "}
              Machine Learning Enthusiast
            </span>
            , creating impactful and responsive web applications that solve
            real-world problems.
          </p>

         <a
  href="/AdnanResume.pdf"
  download="AdnanResume-PDF-document"
  target="_blank"
  rel="noopener noreferrer"
>
  <DownloadButton>Download Resume</DownloadButton>
</a>

        </div>
        <div className={style["scroll-icon"]}>
          <div
            className={style["scroll-down"]}
            style={{ color: "skyblue !important" }}
          >
            <div className={style.chevrons}>
              <div className={style["chevron-down"]}></div>
              <div className={style["chevron-down"]}></div>
            </div>
          </div>
        </div>
        <div className={style["contact-nav"]}>
  <a
    className={style.github}
    target="_blank"
    href="https://github.com/GeekyAdnan125"
  >
    <AiFillGithub size="30px" color="black" />
  </a>

  <a
    className={style.linkedin}
    target="_blank"
    href="https://www.linkedin.com/in/adnan-alam-6a3351284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  >
    <AiFillLinkedin size="30px" color="black" />
  </a>

  <a
    className={style.gmail}
    href="mailto:alamadnan6414@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <BiLogoGmail size="30px" color="black" />
  </a>
</div>

        </div>
       

      {/* About */}
      <div id="About" className={style.about}>
        <div className={style.container}>
          <h2 className={style.title}>About Me</h2>
          <p>
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
          <div className={style["about-content"]}>
            <div className={style["about-info"]}>
              <h3>Get to know me!</h3>
              <p className="text-gray-700 leading-relaxed">
                I'm a{" "}
                <span className="font-semibold text-blue-600">
                  MERN Stack Developer
                </span>{" "}
                and
                <span className="font-semibold text-blue-600">
                  {" "}
                  Machine Learning Enthusiast
                </span>{" "}
                passionate about building dynamic and responsive web
                applications that solve real-world problems.
                <br />
                <br />I specialize in creating seamless user experiences on both
                the frontend and backend using technologies like
                <span className="font-semibold text-blue-600">
                  {" "}
                  React, Node.js, Express, and MongoDB
                </span>
                . Check out some of my work in the{" "}
                <span className="font-semibold text-blue-600">
                  Projects
                </span>{" "}
                section.
                <br />
                <br />I also enjoy sharing what I learn in web development and
                machine learning with the
                <span className="font-semibold text-blue-600">
                  {" "}
                  developer community
                </span>
                . Feel free to connect or follow me on{" "}
                <a
                  href="https://github.com/GeekyAdnan125"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline font-medium"
                >
                  GitHub
                </a>{" "}
                where I share projects, code, and insights from my learning
                journey.
                <br />
                <br />
                I'm actively seeking{" "}
                <span className="font-semibold text-blue-600">
                  job opportunities
                </span>{" "}
                where I can contribute, learn, and grow as a developer. If you
                have an opportunity that aligns with my skills and passion,
                don’t hesitate to{" "}
                <span className="font-semibold text-blue-600">contact</span> me.
              </p>
            </div>
            <div className={style["my-skill"]}>
              <h3>My Skills</h3>
              <div className={style.skills}>
                {skills.map((skill, index) => {
                  return (
                    <div
                      key={`skill${index}`}
                      className={`${style.skill} ${style[skill.cssName]}`}
                    >
                      <div className={style["skill-name bg-blue-400"]}>
                        {skill.name}
                      </div>
                      <div className={style["skill-icon"]}>{skill.icon}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div id="Projects" className="min-h-screen bg-white pt-[100px]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6 text-[var(--title-color)]">
            Projects
          </h2>
          <p className="text-lg text-center w-full leading-relaxed text-[var(--paragraph-color)] max-w-[700px] mx-auto mb-[90px]">
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study
          </p>

          <div className="flex flex-col items-center gap-20">
            {projects.map((project, index) => (
              <div
                key={`project${index}`}
                className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* Image container */}
                <div
                  className={`order-1 relative overflow-hidden rounded-lg shadow-lg group ${
                    index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative pt-[56.25%]">
                    <img
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={project.image}
                      alt={project.name}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Content section */}
                <div
                  className={`order-2 ${
                    index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                  } px-4 lg:px-0`}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-[var(--title-color)] mb-6">
                    {project.name}
                  </h3>

                  {/* Beautiful Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={`tag-${index}-${tagIndex}`}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 hover:bg-blue-400 cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-base md:text-lg text-[var(--paragraph-color)] leading-relaxed mb-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <IconButton
                      width="170px"
                      height="50px"
                      backgroundColor="var(--primary-main)"
                      color="white"
                      link={project.link}
                      icon={<AiOutlineEye size="25px" color="white" />}
                    >
                      Live Demo
                    </IconButton>
                    <IconButton
                      width="100px"
                      height="50px"
                      backgroundColor="black"
                      color="white"
                      link={project.github}
                      icon={<AiFillGithub size="25px" color="white" />}
                    >
                      Github
                    </IconButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact */}
      <div
        id="Contact"
        className="min-h-screen bg-gradient-to-r from-gray-100/80 to-gray-100/80 bg-[url('../assets/icons/back-ground.svg')] py-[100px]"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6 text-[var(--title-color)]">
            Contact
          </h2>
          <p className="text-lg text-center mx-auto max-w-[700px] leading-relaxed text-[var(--paragraph-color)] mb-[90px]">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </p>

          <form
            ref={form}
            onSubmit={sendEmail}
            className={`relative bg-white rounded-md shadow-md max-w-[780px] w-[95%] mx-auto p-10 text-right ${
              loading
                ? 'after:content-[""] after:absolute after:inset-0 after:bg-white after:rounded-md'
                : ""
            }`}
          >
            <div className="space-y-10">
              <InputField
                className="w-full max-w-[700px]"
                height="40px"
                name="name"
                placeholder="Enter Your Name"
                label="Name"
                type="text"
              />
              <InputField
                className="w-full max-w-[700px]"
                height="40px"
                name="email"
                placeholder="Enter Your Email"
                label="Email"
                type="email"
              />
              <TextAreaField
                className="w-full max-w-[700px]"
                height="250px"
                name="message"
                placeholder="Hi Adnan,

I really liked your portfolio and wanted to connect regarding a collaboration opportunity. Let me know if we can discuss further.

Thanks,
your name..
"
                label="Message"
                type="text"
              />
            </div>

            <SubmitButton
              className="absolute right-10 bottom-10"
              icon={<RiSendPlaneFill size="20px" color="white" />}
              width="200px"
              height="60px"
              color="white"
              backgroundColor="var(--primary-main)"
            >
              Submit
            </SubmitButton>

            {loading && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <Loader />
              </div>
            )}
          </form>
        </div>
      </div>

      {/* footer */}
      <div className={style.footer}>
        <div className={style.container}>
          <div className={style["footer-info"]}>
            <div>
              <h3 className="text-xl font-bold ">Adnan Alam</h3>
              <p className="text-sm text-gray-600">
                MERN Stack Developer & ML Enthusiast passionate about building
                web apps and learning intelligent systems.
              </p>
            </div>
            <div className={style.social}>
              <h3>Social</h3>
              <div className="">
                <a
                  className={style.git}
                  target="_blank"
                  href="https://github.com/GeekyAdnan125"
                >
                  <AiFillGithub size="30px" color="white" />
                </a>
                <a
                  className={style.linkedin}
                  target="_blank"
                  href="https://www.linkedin.com/in/adnan-alam-6a3351284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                >
                  <AiFillLinkedin size="30px" color="white" />
                </a>

                <a
                  className={style.gmail}
                  href="mailto:alamadnan6414@gmail.com?subject=Let's Connect&body=Hi Adnan, I saw your portfolio..."
                >
                  <BiLogoGmail size="30px" color="white" />
                </a>
              </div>
            </div>
          </div>
          <div className={style["copy-right"]}>
            © Copyright 2025. Made by <span>Adnan Alam</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
