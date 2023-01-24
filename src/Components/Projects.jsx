import "../Styles/Projects.css";
// import GitHubCalendar from "react-github-calendar";

function Projects() {

  // const selectLastHalfYear = (contributions) => {
  //   const currentYear = new Date().getFullYear();
  //   const currentMonth = new Date().getMonth();
  //   const shownMonths = 7;

  //   return contributions.filter((day) => {
  //     const date = new Date(day.date);
  //     const monthOfDay = date.getMonth();

  //     return (
  //       date.getFullYear() === currentYear ||
  //       monthOfDay > currentMonth - shownMonths ||
  //       monthOfDay <= currentMonth
  //     );
  //   });
  // };


  return (
    <div className="Con">
      <div className="projects">
        <h1>PROJECTS</h1>
      </div>

      <div className="container">
        <div className="card">
          <div className="face face1">
            <div className="content">
              <i className="fab fa-windows"></i>
              <a href="https://clever-kitsune-a5635e.netlify.app/" target="_blank" >
                <img
                  className="image"
                  src="https://www.artlebedev.com/kfc/kfc-main.jpg"
                  alt="kfcImage"
                />
              </a>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <h2 className="clone">KFC Clone</h2>
              <p className="aboutweb">
                KFC (Kentucky Fried Chicken) is an American fast food restaurant
                chain headquartered in Louisville, Kentucky, that specializes in
                fried chicken.
              </p>
              <a href="https://github.com/naveenSaini1/KFC-2.O" type="button" target="_blank">
                <img
                  className="giticon"
                  src="https://img.icons8.com/ios-glyphs/512/github.png"
                  alt=""
                />
              </a>
              <a href="https://clever-kitsune-a5635e.netlify.app/" type="button" target="_blank">
                <img
                  className="giticon redirect"
                  src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/512/external-share-interface-kiranshastry-solid-kiranshastry.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="face face1">
            <div className="content">
              <i className="fab fa-android"></i>
              <a href="https://boisterous-hotteok-75bc34.netlify.app/index.html" target="_blank" >
                <img
                  className="image"
                  src="https://anasqu7.github.io/images/projects/kimaye.png"
                  alt="kfcImage"
                />
              </a>{" "}
              {/* <h3>Android</h3> */}
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <h2 className="clone">Kimaye Clone</h2>
              <p className="aboutweb">
                Hassle free online fruit ordering platform in Mumbai, Kimaye is
                a promise of consistently delivering the safest and superior
                quality fruits.
              </p>
              <a href="https://github.com/Ajay470/Team-squalid-wire" type="button" target="_blank">
                <img
                  className="giticon"
                  src="https://img.icons8.com/ios-glyphs/512/github.png"
                  alt=""
                />
              </a>
              <a href="https://boisterous-hotteok-75bc34.netlify.app/index.html" type="button" target="_blank">
                <img
                  className="giticon redirect"
                  src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/512/external-share-interface-kiranshastry-solid-kiranshastry.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="face face1">
            <div className="content">
              <i className="fab fa-apple"></i>
              <a href="">
                <img
                  className="image"
                  src="https://simg.nicepng.com/png/small/4-42119_coming-soon-coming-soon-logo-png.png"
                  alt="kfcImage"
                />
              </a>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <h2 className="clone">In The Progress</h2>
              <p className="aboutweb">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab
                repudiandae, explicabo voluptate et hic cum ratione a. Officia
                delectus illum perferendis maiores quia molestias vitae fugiat
                aspernatur alias corporis?
              </p>
              <a href="https://github.com/Raj-1313/holy-week-7770" type="button" target="_blank">
                <img
                  className="giticon"
                  src="https://img.icons8.com/ios-glyphs/512/github.png"
                  alt=""
                />
              </a>
              <a href="https://clever-kitsune-a5635e.netlify.app/" type="button" target="_blank">
                <img
                  className="giticon redirect"
                  src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/512/external-share-interface-kiranshastry-solid-kiranshastry.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="face face1">
            <div className="content">
              <i className="fab fa-apple"></i>
              <a href="">
                <img
                  className="image"
                  src="https://simg.nicepng.com/png/small/4-42119_coming-soon-coming-soon-logo-png.png"
                  alt="kfcImage"
                />
              </a>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <h2 className="clone">In The Progress</h2>
              <p className="aboutweb">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab
                repudiandae, explicabo voluptate et hic cum ratione a. Officia
                delectus illum perferendis maiores quia molestias vitae fugiat
                aspernatur alias corporis?
              </p>
              <a href="" type="button">
                <img
                  className="giticon"
                  src="https://img.icons8.com/ios-glyphs/512/github.png"
                  alt=""
                />
              </a>
              <a href="https://clever-kitsune-a5635e.netlify.app/" type="button" target="_blank">
                <img
                  className="giticon redirect"
                  src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/512/external-share-interface-kiranshastry-solid-kiranshastry.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

      </div>
      <div className="gitStats">
        {/* <GitHubCalendar
          username="ayush1013"
          transformData={selectLastHalfYear}
          width="90vw"
        /> */}
        <div>
          <img src="https://github-readme-streak-stats.herokuapp.com/?user=ayush1013&" alt="" />
        </div>
        <div>
          <img src="https://github-readme-stats.vercel.app/api?username=ayush1013&show_icons=true&locale=en" alt="" />
        </div>
        <div>
          <img src="https://github-readme-stats.vercel.app/api/top-langs?username=ayush1013&show_icons=true&locale=en&layout=compact" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
