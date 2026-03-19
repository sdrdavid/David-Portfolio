import React from "react";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import resumePDF from "../../assets/David_CV (1).pdf";

import { Link, Navigate } from "react-router-dom";





const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-[#014C47] via-[#0A7972] to-[#11A295] ">
      <div className=" container mx-auto pt-5 h-[720px] md:h-[100vh] md:flex-col-reverse sm:h-[480px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left   flex-1 flex flex-col justify-center lg:mt-20 md:mt-20  md:justify-start sm:mt-44 gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2 sm:mt-5">
            <h2
              data-aos="fade-up"
              className=" text-5xl font-bold md:text-[2.5rem] sm:text-[1.8rem]"
            >
              Hello, I'm David
            </h2>
            <TypeAnimation
              data-aos="fade-up"
              sequence={[ 
               "Software Engineer (Frontend)",
                2000,
                "React Js Developer",
                2000,
                "Driven by Code & Creativity"
              ]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-white text-4xl font-bold md:text-[1.6rem] sm:text-sm"
            />
            <p
              // data-aos="fade-up"
              className=" text-[1.3rem] font-medium w-full md:w-full text-black sm:text-[.89rem]"
            >
              {/* I originally build dynamic, efficient and scalable web applications as a MERN Full-Stack Developer skilled in MongoDB, Express.js, React.js, and Node.js. */}
               I showcase my expertise in frontend and backend development, with a strong focus on building scalable and user-friendly applications. I am passionate about continuous learning, solving real-world challenges, and working with modern technologies. I enjoy collaborating on impactful projects that drive innovation and create meaningful user experiences. Let’s build something great together — feel free to connect.
            </p>
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
            <div
               
              className=" bg-black text-[1rem] text-white px-10 py-2 sm:py-1 sm:px-4 rounded-lg font-bold  hover:text-[#11A295]"
            >
              
              <a className="items-center mt-4" href="#contact">Hire Me</a>
            </div>
            <a
              href={resumePDF} download
              className="flex items-center gap-2 border- text-[1rem] bg-white border-black px-7 py-2 sm:px-4 rounded-lg font-bold  hover:text-[#11A295]"
            
            >
              <div className="flex items-center gap-1">
                Resume <FiDownload />
              </div>
            </a>
          </div>
          <div className="icons flex mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-5"
            >
              <li>
                <a href="https://github.com/sdrdavid">
                  {" "}
                  <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/david-raja-s/">
                  {" "}
                  <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 " />{" "}
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <AiFillInstagram className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <FaYoutube className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  "  />{" "}
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <AiFillTwitterCircle className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
