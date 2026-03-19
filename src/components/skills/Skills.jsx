import React from "react";
import ProgressBar from "../../chip/ProgressBar";
import SkillBox from "../../chip/SkillBox";



import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";


import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFigma,
  SiMysql,
  SiTypescript

} from "react-icons/si";
import { GrCode, GrGithub } from "react-icons/gr";
import { SiNextdotjs } from "react-icons/si";
import { FaBootstrap, FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";

const Skills = ({ darkMode }) => {
  return (
    <div id="skills" className="bg-gradient-to-r from-[#014C47] via-[#0A7972] to-[#11A295] ">
      <div className=" container m-auto md:py-2 sm:py-20 lg:py-2">   
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-white sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        {/* content*/}
        <div className="flex md:flex-col ">
          <div className="left flex-1 w-full">
            <p
              data-aos="fade-up"
              className=" text-black font-medium text-lg w-[100%]"
            >
              Here are my skills.
            </p>
            {/* left box */}
            <div
              data-aos="zoom-in"
              className="progress flex items-center h-[100%] justify-end md:justify-center"
            >
              <div className=" flex flex-col gap-6  w-3/4  my-5 md:w-[90%]">
                <ProgressBar logo={<IoLogoHtml5 />} name={"HTML"} value={95} />
                <ProgressBar logo={<IoLogoCss3 />} name={"CSS"} value={88} />
                <ProgressBar
                  logo={<SiJavascript />}
                  name={"Javascript"}
                  value={80}
                />
               
                <ProgressBar logo={<FaReact />} name={"React Js"} value={80} />
                 <ProgressBar logo={<SiNextdotjs  />} name={"Next Js"} value={80} />
                
              </div>
            </div>
          </div>
          {/* right box */}
          <div className="right relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full">
            <div className="first2 flex flex-col gap-10">
              <SkillBox
                logo={<SiNextdotjs/>}
                black={"white"}
                white={"black"}
                skill={"Next Js"}
              />
              <SkillBox
                logo={<SiMysql/>}
                black={"white"}
                white={"black"}
                skill={"My Sql"}
              />
            </div>
            <div className="last2 flex flex-col gap-10">
              <SkillBox
                logo={<SiTypescript />}
                black={"black"}
                white={"white"}
                skill={"Typescript"}
              />
              
               <SkillBox
                className=""
                logo={
                  <GrGithub className=" text-white bg-black rounded-full h-fit border-white overflow-hidden" />
                }
                black={"black"}
                white={"white"}
                skill={"Github"}
              /> 
            </div>
          </div>
        </div>

        
        <div
  data-aos="fade-up"
  data-aos-duration="1200"
  className="container m-auto flex flex-wrap items-center justify-center mt-8 gap-8 md:gap-5"
>
  {/* Icon Items */}
  <img
    className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
    src="https://img.icons8.com/color/48/null/html-5--v1.png"
    alt="HTML5"
  />
  <img
    className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
    src="https://img.icons8.com/color/48/null/css3--v1.png"
    alt="CSS3"
  />
  <img
    className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
    src="https://img.icons8.com/color/48/null/bootstrap.png"
    alt="Bootstrap"
  />
  <img
    className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
    src="https://img.icons8.com/color/48/null/javascript--v1.png"
    alt="JavaScript"
  />
  <img
    className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
    src="https://img.icons8.com/color/48/null/react-native--v1.png"
    alt="React"
  />
  <img
    className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
    src="https://img.icons8.com/color/48/null/nodejs.png"
    alt="Node.js"
  />
  <img
    className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
    src="https://img.icons8.com/color/48/null/express-js.png"
    alt="Express.js"
  />
  <img
    className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
    src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/null/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png"
    alt="MongoDB"
  />
  <img
    className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
    src="https://img.icons8.com/color/48/null/git--v1.png"
    alt="Git"
  />
  <img
    className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
    src="https://img.icons8.com/color/48/null/github--v1.png"
    alt="GitHub"
  />
  <img
    className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
    src="https://img.icons8.com/color/48/null/adobe-photoshop--v1.png"
    alt="Photoshop"
  />
  <img
    className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
    src="https://img.icons8.com/color/48/null/microsoft-clipchamp--v1.png"
    alt="Clipchamp"
  />
</div>

      </div>
    </div>
  );
};

export default Skills;
