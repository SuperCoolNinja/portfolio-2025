import styles from "../about.module.css";

import LazyImage from "../../../components/LazyImage/LazyImage";
import Socials from "../../Socials/Socials";
import Bio from "./Bio";
import profileThumb from "../../../assets/profil-thumb.jpg";
import profileFull from "../../../assets/profil.jpg";
import OpenToWork from "./OpenToWork";

const BioSection: React.FunctionComponent = () => {
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
      <OpenToWork />
      <Socials />
    </section>
  );
};

export default BioSection;
