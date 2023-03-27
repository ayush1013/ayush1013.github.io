import style from "../Styles/Skills.module.css";
import "../Styles/SkillIcon.css"
import React from 'react';
const skills = [
  {
    image: "https://img.icons8.com/plasticine/512/react.png",
    title: "React"
  },
  {
    image: "https://img.icons8.com/color/512/redux.png",
    title: "Redux"
  },
  {
    image: "https://img.icons8.com/fluency/512/node-js.png",
    title: "Node JS"
  },
  {
    image: "https://img.icons8.com/officel/512/express-js.png",
    title: "Express"
  },
  {
    image: "https://img.icons8.com/color/512/mongodb.png",
    title: "Mongo DB"
  },
  {
    image: "https://img.icons8.com/color/512/html-5.png",
    title: "HTML"
  },
  {
    image: "https://img.icons8.com/color/512/css3.png",
    title: "CSS"
  },
  {
    image: "https://img.icons8.com/color/512/javascript.png",
    title: "Javascript"
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
    title: "Typescript"
  },
  {
    image: "https://img.icons8.com/color/512/chakra-ui.png",
    title: "Chakra UI"
  },
  {
    image: "https://img.icons8.com/ios-glyphs/512/github.png",
    title: "Github"
  },
];

function Skills() {
  return (
    <div className={style.container}>

      <div className={style.skills}>
        <h1>SKILLS</h1>
      </div>

      <div className={style.iconcontainer}>
        <div className={style.iconBox}>
          {skills.map((skill, index) => {
            return (
              // <div key={index}>
              //   <img src={skill} alt={skill} />
              // </div>
              <div class="icon facebook">
                <span class="tooltip">{skill.title}</span>
                <span>
                    <img src={skill.image} alt={skill.name} />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
