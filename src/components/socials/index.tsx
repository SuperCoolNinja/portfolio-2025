import { GithubIcon } from "./icons/github";
import { LinkedinIcon } from "./icons/linkedin";
import styles from "./styles.module.css";
import { YoutubeIcon } from "./icons/youtube";

export const ListSocialsIcons: React.FunctionComponent = () => {
  return (
    <ul className={styles.socials_wrapper}>
      <li>
        <a
          href="https://github.com/SuperCoolNinja"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/samir-baatour/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon />
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/@supercoolninja"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YoutubeIcon />
        </a>
      </li>
    </ul>
  );
};
