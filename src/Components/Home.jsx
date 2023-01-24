import styles from "../Styles/Home.module.css";

function Home(){

    return (
        <div className= {styles.container} >
            <div className={styles.inContainer} >
                <div>
                    <div className={styles.introBox} >
                        <h1 className={styles.Hello}>Hello, </h1>
                        <h1>I am  <span>Ayush Verma</span> </h1>
                        <p>Aspiring <span>Full Stack Web Developer</span> </p>
                        <p> at Masai School, Banglore</p>
                    </div>
                    <div className= {styles.RBut} >
                    <a className={styles.download} href="https://drive.google.com/u/0/uc?id=1wmufWjrLaIsUqdE_0nBDweoFlVvtq_as&export=download" ><button> Resume</button></a>
                    </div>
                </div>
                <div className={styles.imgBox}>
                    <img src="https://media0.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" alt="" />
                </div>
            </div>
            
        </div>
    )
}

export default Home;



{/* <div className={styles.logoBox} >
                <div>
                    <a href="https://github.com/ayush1013"><img width="75px" src="https://img.icons8.com/3d-fluency/512/github.png" alt="github" /></a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/ayush-verma-4a3291224/"><img width="75px" src="https://www.freepnglogos.com/uploads/linkedin-blue-style-logo-png-0.png" alt="linkeIn" /></a>
                </div>
                <div>
                    <img width="75px" src="https://img.icons8.com/color/512/contract-job.png" alt="Resume" />
                </div>
            </div> */}