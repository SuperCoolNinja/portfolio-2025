import styles from "./about.module.css";

import profileThumb from "../../assets/profil-thumb.jpg";
import profileFull from "../../assets/profil-full.jpg";
import LazyImage from "../LazyImage/LazyImage";
import Socials from "../Socials/Socials";
import Bio from "./Bio";
import CardAboutMe from "./CardAboutMe";
import Items from "./Items";
import type { ItemsProps } from "./Items";

const About: React.FC = () => {
  const lookingForJob = true;

  const aboutItemsData: ItemsProps[] = [
    {
      subtitle: "My Main Stacks",
      items: ["Typescript", "NodeJS", "ReactJS", "MongoDB"],
    },
    {
      subtitle: "What I do ?",
      items: ["Frontend", "Backend", "Game Development"],
    },
  ];

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
