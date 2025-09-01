import styles from "./about.module.css";

import profileThumb from "../../assets/profil-thumb.jpg";
import profileFull from "../../assets/profil-full.jpg";
import LazyImage from "../LazyImage/LazyImage";
import Socials from "../Socials/Socials";

const Stacks: React.FunctionComponent = () => {
  return (
    <ul className={styles.stacks}>
      <li className={styles.stacks_item}>Typescript</li>
      <li className={styles.stacks_item}>Nodejs</li>
      <li className={styles.stacks_item}>ReactJS</li>
      <li className={styles.stacks_item}>MongoDB</li>
    </ul>
  );
};

const CardAboutMe: React.FunctionComponent = () => {
  return (
    <div className={styles.wrapper_card}>
      <div className={styles.card}>
        <p className={styles.title}>About Me</p>
        <br />
        <p>
          Ambitious fullstack developer from France, mastering ReactJS, NodeJS,
          and MongoDB, creating impactful solutions!
        </p>
        <p>
          Interested in video game creation and having an eye for modern,
          ergonomic UX/UI.
        </p>
        <br />
        <p>My Main Stacks:</p>
        <Stacks />
      </div>
    </div>
  );
};

const About: React.FunctionComponent = () => {
  const looking_for_job = true;

  const OpenToWork = looking_for_job && (
    <div className={styles.look_job_container}>
      <div className={styles.circle}></div>
      <p className={styles.look_job_title}>open to work.</p>
    </div>
  );

  return (
    <div className={styles.container}>
      <LazyImage
        className={styles.profil_picture}
        src={profileFull}
        placeholder={profileThumb}
        alt="Ma photo de profil"
        width={200}
      />
      <Socials />

      <h2 className={styles.name}>Samir Baatour</h2>
      <p className={styles.job}>Fullstack developer</p>

      {OpenToWork}

      <CardAboutMe />
    </div>
  );
};
export default About;
