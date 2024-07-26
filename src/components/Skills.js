import React, { useEffect } from "react";
import "./Skills.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  useEffect(() => {
    AOS.init({
      useClassNames: true,
      initClassName: false,
      animatedClassName: "animated",
    });
  });
  return (
    <section id="Skills" class="skills-section">
      {/* <div class="container"></div> */}
      <h1 data-aos="fade-down">Tools And Skills</h1>

      <br></br>
      <br></br>
      <h2 data-aos="fade-down">Front-End</h2>
      <div class="skills-div">
        <div class="skills-card" data-aos="flip-up">
          <img
            src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
            alt=""
          />
          <h3>React</h3>
        </div>

        <div class="skills-card" data-aos="flip-up">
          <img src="https://cdn.svgporn.com/logos/javascript.svg" alt="" />
          <h3>JavaScript</h3>
        </div>

        <div class="skills-card" data-aos="flip-up">
          <img src="https://cdn.svgporn.com/logos/css-3.svg" alt="" />
          <h3>CSS</h3>
        </div>
        <div class="skills-card" data-aos="flip-up">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
            alt=""
          />
          <h3>HTML</h3>
        </div>

        <div class="skills-card" data-aos="flip-up">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1024px-.NET_Core_Logo.svg.png"
            alt=""
          />
          <h3>Asp Dot Net Core</h3>
        </div>

        <div class="skills-card" data-aos="flip-up">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <h3>Asp Dot Net MVC</h3>
        </div>

        <div class="skills-card" data-aos="flip-up">
          <img src="https://github.com/chakra-ui.png" alt="" />
          <h3>Chakra UI</h3>
        </div>
      </div>

      <br></br>
      <br></br>
      <h2 data-aos="fade-down">Back-End & Database</h2>
      <div class="skills-div">
        <div class="skills-card" data-aos="flip-up">
          <img
            src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png"
            alt=""
          />
          <h3>MongoDB</h3>
        </div>
        <div class="skills-card" data-aos="flip-up">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnO0xHQrNDbCdgefmnjSjUPAMIKBx2F-NOww&s"
            alt=""
          />
          <h3>MySql</h3>
        </div>
        <div class="skills-card" data-aos="flip-up">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <h3>Ms Sql Server</h3>
        </div>

        <div class="skills-card" data-aos="flip-up">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNvlAM2kg5H1ufCzBW7GjzCo77Ys_neYxOHQ&usqp=CAU"
            alt=""
          />
          <h3>ExpressJS</h3>
        </div>
        {/* <div class="skills-card" data-aos="flip-up">
          <img
            src="https://miro.medium.com/max/512/1*fVBL9mtLJmHIH6YpU7WvHQ.png"
            alt=""
          />
          <h3>Postman</h3>
        </div> */}
        <div class="skills-card" data-aos="flip-up">
          <img
            src="https://cdn.freebiesupply.com/logos/large/2x/nodejs-icon-logo-png-transparent.png"
            alt=""
          />
          <h3>Node</h3>
        </div>
        <div class="skills-card" data-aos="flip-up">
          <img
            src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
            alt="git"
          />
          <h3>Git</h3>
        </div>
        <div class="skills-card" data-aos="flip-up">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="github"
          />
          <h3>Github</h3>
        </div>
      </div>
      <br></br>
      <br></br>
    </section>
  );
}
