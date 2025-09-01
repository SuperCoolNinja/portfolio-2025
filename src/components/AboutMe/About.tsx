import styles from "./about.module.css";

import profileThumb from "../../assets/profil-thumb.jpg";
import profileFull from "../../assets/profil-full.jpg";
import LazyImage from "../LazyImage/LazyImage";
import Socials from "../Socials/Socials";

const CardAboutMe: React.FunctionComponent = () => {
  return (
    <div className={styles.wrapper_card}>
      <h3 className={styles.title}>About Me</h3>
      <div className={styles.card}>
        <p>
          Ambitious fullstack developer from France, mastering ReactJS, NodeJS,
          and MongoDB, creating impactful solutions!
        </p>
        <br />
        <p>
          Interested in video game creation and having an eye for modern,
          ergonomic UX/UI.
        </p>
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
