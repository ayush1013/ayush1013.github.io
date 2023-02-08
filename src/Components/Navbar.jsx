import { useState } from "react";
import navStyle from "../Styles/navbar.module.css";
import About from "./About";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

function Navbar() {
  const [section, setSection] = useState("");
  const [bar, setBar] = useState(false);

  const handleSection = (sec) => {
    setSection(sec);
  };

  console.log(bar);

  return (
    <div className={bar ? navStyle.glass : ""}>
      <div className={navStyle.navContainer}>
        <div className={navStyle.name}>
          <a href="">
            <h2>Ayush Verma</h2>
          </a>
        </div>
        <div className={navStyle.menu} onClick={() => setBar(!bar)}>
          {!bar ? (
            <img
              src="https://img.icons8.com/material-outlined/512/menu.png"
              alt=""
            />
          ) : (
            <img src="https://img.icons8.com/ios-filled/512/delete-sign.png" />
          )}
        </div>
        <div className={`${navStyle.navbar1} ${bar ? navStyle.menubar : ""} `}>
          <a
            href="#home"
            className={section === "sec1" ? navStyle.active : navStyle.unactive}
            onClick={() => handleSection("sec1")}
          >
            Home
          </a>
          <a
            href="#about"
            className={section === "sec2" ? navStyle.active : navStyle.unactive}
            onClick={() => handleSection("sec2")}
          >
            About
          </a>
          <a
            href="#skills"
            className={section === "sec3" ? navStyle.active : navStyle.unactive}
            onClick={() => handleSection("sec3")}
          >
            Skills
          </a>
          <a
            href="#projects"
            className={section === "sec4" ? navStyle.active : navStyle.unactive}
            onClick={() => handleSection("sec4")}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={section === "sec5" ? navStyle.active : navStyle.unactive}
            onClick={() => handleSection("sec5")}
          >
            Contact
          </a>
          <a href="https://drive.google.com/file/d/1wmufWjrLaIsUqdE_0nBDweoFlVvtq_as/view?usp=sharing" target="_blank">
            Resume
          </a>
        </div>
      </div>

      <div onClick={() => setBar(false)}>
        <section className={navStyle.sec1} id="home">
          <Home />
        </section>
        <section className={navStyle.sec2} id="about">
          <About />
        </section>
        <section className={navStyle.sec3} id="skills">
          <Skills />
        </section>
        <section className={navStyle.sec4} id="projects">
          <Projects />
        </section>
        <section className={navStyle.sec5} id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default Navbar;
