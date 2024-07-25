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
          <img src="https://cdn.svgporn.com/logos/redux.svg" alt="" />
          <h3>Redux</h3>
        </div>
        <div class="skills-card" data-aos="flip-up">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <h3>BootStrap</h3>
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNvlAM2kg5H1ufCzBW7GjzCo77Ys_neYxOHQ&usqp=CAU"
            alt=""
          />
          <h3>ExpressJS</h3>
        </div>
        <div class="skills-card" data-aos="flip-up">
          <img
            src="https://miro.medium.com/max/512/1*fVBL9mtLJmHIH6YpU7WvHQ.png"
            alt=""
          />
          <h3>Postman</h3>
        </div>
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
