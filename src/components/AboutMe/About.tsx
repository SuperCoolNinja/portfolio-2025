import styles from "./about.module.css";

import profileThumb from "../../assets/profil-thumb.jpg";
import profileFull from "../../assets/profil-full.jpg";
import LazyImage from "../LazyImage/LazyImage";
import Socials from "../Socials/Socials";

const About: React.FunctionComponent = () => (
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
  </div>
);

export default About;
