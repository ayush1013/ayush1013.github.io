import styles from "../Styles/Home.module.css";
import React from "react";
function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.inContainer}>
        <div>
          <div className={styles.introBox}>
            <h1 className={styles.Hello}>Hello, </h1>
            <h1>
              I am <span>Ayush Verma</span>{" "}
            </h1>
            <p>
              Aspiring <span>Full Stack Web Developer</span>{" "}
            </p>
            <p> at Masai School, Banglore</p>
          </div>
          <div className={styles.RBut}>
            <a
              className={styles.download}
              href="https://drive.google.com/u/0/uc?id=1wmufWjrLaIsUqdE_0nBDweoFlVvtq_as&export=download"
            >
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1wmufWjrLaIsUqdE_0nBDweoFlVvtq_as/view?usp=sharing",
                    "_blank",
                    "noreferrer"
                  )
                }
              >
                {" "}
                Resume
              </button>
            </a>
          </div>
        </div>
        <div className={styles.imgBox}>
          <img
            src="https://media0.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
