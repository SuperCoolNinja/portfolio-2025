import styles from "./about.module.css";

import profileThumb from "../../assets/profil-thumb.jpg";
import profileFull from "../../assets/profil-full.jpg";
import LazyImage from "../../components/LazyImage/LazyImage";
import Socials from "../Socials/Socials";
import Bio from "./components/Bio";
import CardAboutMe from "./components/CardAboutMe";
import { aboutItemsData } from "./data/aboutItem_data";
import InfoSection from "./components/InfoSection";
import Tag from "../../components/Tag/Tag";

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

      <section>
        <CardAboutMe />
        {aboutItemsData.map((data, idx) => (
          <InfoSection
            key={idx}
            subtitle={data.subtitle}
            labels={data.labels}
          />
        ))}
      </section>
    </div>
  );
};
export default About;
