import "../Styles/Media.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter, faGithub, faBar} from "@fortawesome/free-brands-svg-icons";

function Media() {
  return (
    <div>
      <ul class="wrapper">
        <li class="icon facebook">
          <span class="tooltip">Linkedin</span>
          <span>
            <a className="mediaIcon" href="https://www.linkedin.com/in/ayush-verma-4a3291224/" target="_blank">
              {/* <FontAwesomeIcon className="liIcon" icon={faLinkedin} /> */}
            </a>
          </span>
        </li>
        <li class="icon twitter">
          <span class="tooltip">Twitter</span>
          <span>
            <a className="mediaIcon" href="https://twitter.com/Ayush_Verma_13" target="_blank" >
              {/* <FontAwesomeIcon className="twitIcon" icon={faTwitter} /> */}
            </a>
          </span>
        </li>
        {/* <li class="icon instagram">
          <span class="tooltip">Instagram</span>
          <span></span>
        </li> */}
        <li class="icon github">
          <span class="tooltip">Github</span>
          <span>
          <a className="mediaIcon" href="https://github.com/ayush1013" target="_blank" >
              {/* <FontAwesomeIcon className="gitIcon" icon={faGithub} /> */}
            </a>
          </span>
        </li>
        {/* <li class="icon youtube">
          <span class="tooltip">Youtube</span>
          <span>
            <i class="fab fa-youtube"></i>
          </span>
        </li> */}
      </ul>
    </div>
  );
}

export default Media;
