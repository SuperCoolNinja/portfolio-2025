import styles from "./about.module.css";

import profileThumb from "../../assets/profil-thumb.jpg";
import profileFull from "../../assets/profil-full.jpg";
import LazyImage from "../../components/LazyImage/LazyImage";
import Socials from "../Socials/Socials";
import Bio from "./components/Bio";
import CardAboutMe from "./components/CardAboutMe";
import Items from "./components/Items";
import { aboutItemsData } from "./data/aboutItem_data";

const About: React.FunctionComponent = () => {
  const lookingForJob = true;

  return (
    <div className={styles.container}>
      <LazyImage
        className={styles.profil_picture}
        src={profileFull}
        placeholder={profileThumb}
        alt="Profil Picture"
        width={200}
      />

      <Bio />

      {lookingForJob && (
        <div className={styles.look_job_container}>
          <p className={styles.look_job_title}>open to work</p>
        </div>
      )}

      <Socials />

      <div className={styles.wrapper_about_items}>
        <CardAboutMe />
        {aboutItemsData.map((data, idx) => (
          <Items key={idx} {...data} />
        ))}
      </div>
    </div>
  );
};
export default About;
