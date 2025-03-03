import React from "react";
import WorkCard from "../../chip/WorkCard";

const Work = () => {
  return (
    <div className="bg-gradient-to-r from-[#014C47] via-[#0A7972] to-[#11A295] py-10 ">
    <div id="works" className="container m-auto ">
      <div 
      data-aos="fade-up"
       className="relative mb-5">
        <h3 className="text-3xl font-black text-white sm:text-2xl ">Works</h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div 
      data-aos="fade-up"
       className="left flex-1 w-full">
        <p className="text-black font-medium w-[100%]">
          Here are some of my works.
        </p>
      </div>
      {/* card */}
      <div className="card-wrapper mx-auto w-[90%] sm:w-fit mt-5">
        <div className="card-box grid grid-cols-3 space-y-5 space-x-5 w-full md:grid-cols-2 sm:gap-8 sm:grid-cols-1 sm:space-y-0 ">
          <WorkCard />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Work;
