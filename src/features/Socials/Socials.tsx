import {
  LogosGithubIcon,
  LogosLinkedinIcon,
  LogosYoutubeIcon,
} from "../../components/Logos/Logos";
import styles from "./socials.module.css";

const Socials: React.FunctionComponent = () => {
  return (
    <div>
      <ul className={styles.container}>
        <li className={styles.item} title={"Github"}>
          <a
            href="https://github.com/SuperCoolNinja?tab=repositories"
            target="_blank"
          >
            <LogosGithubIcon />
          </a>
        </li>

        <li className={styles.item} title={"Linkedin"}>
          <a href="https://www.linkedin.com/in/samir-baatour/" target="_blank">
            <LogosLinkedinIcon />
          </a>
        </li>

        <li className={styles.item} title={"Youtube"}>
          <a
            href="https://www.youtube.com/channel/UCGxZ3qgSIVzU-eU2Whe7FHw/"
            target="_blank"
          >
            <LogosYoutubeIcon />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
