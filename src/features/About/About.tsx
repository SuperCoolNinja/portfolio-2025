import styles from "./about.module.css";

import CardAboutMe from "./components/CardAboutMe";
import { aboutItemsData, AboutMeSentances } from "./data/aboutItem_data";
import InfoSection from "./components/InfoSection";
import BioSection from "./components/BioSection";

const About: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <section>
        <BioSection />
      </section>

      <section>
        <CardAboutMe sentances={AboutMeSentances} />
        {aboutItemsData.map((data) => (
          <InfoSection
            key={data.subtitle}
            subtitle={data.subtitle}
            labels={data.labels}
          />
        ))}
      </section>
    </div>
  );
};
export default About;
