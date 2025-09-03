import styles from "./about.module.css";

import profileThumb from "../../assets/profil-thumb.jpg";
import profileFull from "../../assets/profil-full.jpg";
import LazyImage from "../LazyImage/LazyImage";
import Socials from "../Socials/Socials";

type list_items_data = {
  subtitle: string;
  items: string[];
};

// <li className={styles.stacks_item}>Typescript</li>
//       <li className={styles.stacks_item}>Nodejs</li>
//       <li className={styles.stacks_item}>ReactJS</li>
//       <li className={styles.stacks_item}>MongoDB</li>

const Items: React.FunctionComponent<list_items_data> = ({
  subtitle,
  items,
}) => {
  return (
    <div className={styles.items_container}>
      <p className={styles.subtitle}>{subtitle}</p>
      <ul className={styles.items}>
        {items.map((v, i) => (
          <li className={styles.item} key={i}>
            {v}
          </li>
        ))}
      </ul>
    </div>
  );
};

const CardAboutMe: React.FunctionComponent = () => {
  return (
    <div className={styles.wrapper_card}>
      <div className={styles.card}>
        <p className={styles.title}>About Me</p>
        <p className={styles.content}>
          Fullstack developer from France, continuously learning and improving
          with ReactJS, NodeJS, and MongoDB.
        </p>
        <p className={styles.content}>
          Curious about video game development as well, with a growing interest
          in creating modern, ergonomic, and user-friendly UX/UI designs.
        </p>
      </div>
    </div>
  );
};

const Bio: React.FunctionComponent = () => {
  return (
    <>
      <h2 className={styles.name}>Samir Baatour</h2>
      <p className={styles.job}>Fullstack Developer</p>
    </>
  );
};

const About: React.FunctionComponent = () => {
  const looking_for_job = true;

  const OpenToWork = looking_for_job && (
    <div className={styles.look_job_container}>
      <p className={styles.look_job_title}>open to work</p>
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
      <Bio />
      {OpenToWork}
      <Socials />

      <div className={styles.wrapper_about_items}>
        <CardAboutMe />
        <Items
          subtitle="My Main Stacks"
          items={["Typescript", "NodeJS", "ReactJS", "MongoDB"]}
        />
        <Items
          subtitle="What I do ?"
          items={["Frontend ", "Backend", "Game Development"]}
        />
      </div>
    </div>
  );
};
export default About;
