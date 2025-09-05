import styles from "./about.module.css";

import CardAboutMe from "./components/CardAboutMe";
import { aboutItemsData } from "./data/aboutItem_data";
import InfoSection from "./components/InfoSection";
import BioSection from "./components/BioSection";

const About: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <BioSection />

      <div>
        <CardAboutMe />
        {aboutItemsData.map((data) => (
          <InfoSection
            key={data.subtitle}
            subtitle={data.subtitle}
            labels={data.labels}
          />
        ))}
      </div>
    </div>
  );
};
export default About;
