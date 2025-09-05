import styles from "../about.module.css";

import LazyImage from "../../../components/LazyImage/LazyImage";
import Socials from "../../Socials/Socials";
import Bio from "./Bio";
import profileThumb from "../../../assets/profil-thumb.jpg";
import profileFull from "../../../assets/profil-full.jpg";

const BioSection = () => {
  const lookingForJob = true;

  return (
    <section className={styles.wrapper_bio_section}>
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
    </section>
  );
};

export default BioSection;
