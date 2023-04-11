import style from "../Styles/About.module.css";
import React from 'react';
function About() {

    return (
        <div>
            <div className={style.container} >
                <div className={style.profileBox} >
                    <img src="/Profile.jpg" alt="image" />
                </div>
                <div>
                    <div className={style.about} >
                        <h1>A little bit about me</h1>
                    </div>
                    <div className={style.summaryBox} >
                        <p>
                            Hi there! My name is Ayush Verma an aspiring full-stack web developer skilled in DSA, HTML, CSS,
                            Javascript, React, Redux, Node JS, Express, Mongo DB.
                        </p>
                        <br />
                        <p>
                            A person who enjoys
                            challenges and is a good problem solver curious to learn new
                            things.
                        </p>
                        <br />
                        <p>
                            Looking forward to working in an organization that
                            uses my abilities and provides a healthy and competitive
                            environment to learn and offers opportunities to grow.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;