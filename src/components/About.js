import React, { useEffect } from "react";
import "./About.css";

import Aos from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      useClassNames: true,
      initClassName: false,
      animatedClassName: "animated",
    });
  });
  return (
    <section id="about">
      <div className="about-cont container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-28 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="head" data-aos="fade-down">
            LET ME <span className="purple"> INTRODUCE </span> MYSELF
          </h1>
          <br></br>
          <br></br>
          <br></br>
          <div>
            <div>
              <div
                md={8}
                className="home-about-description"
                data-aos="fade-right"
              >
                <p className="home-about-body" style={{ fontSize: "1.4em" }}>
                  I am a Full Stack Developer passionate about building digital
                  products that enhance everyday experiences. With 1 Year of
                  hands-on experience as a .NET developer and core knowledge of
                  the MERN stack, I am a quick learner and driven to continually
                  expand my skills. I look forward to applying and further
                  developing my expertise in creating impactful web
                  applications.
                </p>
              </div>
            </div>
            <div></div>
          </div>
          <br></br>
          <br></br>
          <br></br>

          <div className="flex justify-center mt-14" data-aos="fade-up">
            <a
              href="https://drive.google.com/file/d/1D6074XDBB5WVHaBpaacVP5j09VrtDJGn/view?usp=sharing"
              target="_blank"
              className="inline-flex text-white bg-green-500 border-0 py-3 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
              onClick={(e) => {
                e.preventDefault(); // Prevent the default action to open the link immediately
                window.open(
                  "https://drive.google.com/file/d/1D6074XDBB5WVHaBpaacVP5j09VrtDJGn/view?usp=sharing",
                  "_blank"
                ); // Open the link in a new tab
                setTimeout(() => {
                  window.location.href =
                    "https://drive.google.com/uc?export=download&id=1D6074XDBB5WVHaBpaacVP5j09VrtDJGn"; // Trigger the download after opening the link
                }, 1000); // Adjust the timeout as needed
              }}
            >
              Resume
            </a>
            <a
              href="/#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Projects
            </a>
          </div>
        </div>
        <div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 m-auto"
          data-aos="fade-left"
        >
          <img
            className="image-approunded-full rounded-t-half rounded-b-full m-auto rounded-r-full and rounded-l-full border-8 w-2/4  "
            alt="img"
            src="/anil.png"
          />
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </section>
  );
}
