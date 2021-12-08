import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer(props) {

  return (
    
      <footer className={classes.footer}>
        <div className={classes.signature}>
          <p>
            Design and coded by:
            <br /> Ian Rossi Gladulich
          </p>
        </div>
        <div className={classes.contacts}>
          <a
            href="https://www.linkedin.com/in/ianrg90/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="3x" color="#0077b5" />
          </a>
          <a href="https://github.com/ianrg90" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} size="3x" color="#6e5494" />
          </a>
        </div>
      </footer>
  );
}

export default Footer;
