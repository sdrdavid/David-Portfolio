import React from "react";

const Resume = () => {
  return (
    <div className="bg-gradient-to-r from-[#014C47] via-[#0A7972] to-[#11A295] py-10">
    <div id="resume" className=" container m-auto ">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-white sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-black font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-[#D9F2E6]">
              Experience
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-[#D9F2E6] shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                   Frontend Developer Internship Trainee
                </h1>
                <span className=" text-[.9rem] font-semibold text-[#D9F2E6] sm:text-base">
                  Weboin Technologies pvt ltd
                </span>
                <span className=" text-[.9rem] font-semibold text-black sm:text-base">
                  Nov 2024 - Present
                </span>
                <p className=" text-[.9rem] text-justify break-words text-white">
                During my frontend developer internship, I worked with React.js and Next.js to build dynamic and responsive web applications.<br/>
                I gained hands-on experience in developing UI components, optimizing performance with SSR/SSG, and integrating APIs.<br/>
                This internship enhanced my skills in modern web development, state management, and deployment.<br/>
Used Git and GitHub to manage versions.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-[#D9F2E6]">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-[#D9F2E6] shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  B.E, Mechanical Engineering
                </h1>
                <span className=" text-[.9rem] font-semibold text-white sm:text-base">
                  Thamirabharani Engineering College,Tirunelveli
                </span>
                <span className=" text-[.9rem] font-semibold text-black sm:text-base">
                  July 2016 - Year 2020
                </span>
                <p className=" text-[.9rem] text-justify text-white">
                During my time in the Mechanical Engineering program, I developed a solid understanding of mechanical systems and honed my problem-solving skills. The experience taught me the importance of teamwork, consistency, and time management in tackling complex challenges.<br/>

I also learned to stay motivated and adapt to new situations, which helped me approach projects creatively and with a practical mindset. These experiences have shaped my ability to work effectively under pressure and continuously strive for growth.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Resume;
