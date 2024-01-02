import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Boobalan, Please take a look around.</p>
          </div>
          <div>
            <p className="text-2xl">
              I have completed a BE Mechanical Engineering at VSA College in
              Salem.I work as a retail sales associate for automobile in 2
              years. Then I am interested in switching careers in the software
              development field.So I have developed my skills in web
              development-related areas.Now,I am passionate about building
              excellent responsive web application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
