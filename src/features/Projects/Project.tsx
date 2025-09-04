import styles from "./project.module.css";

const Project: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <section className={styles.wrapper_title}>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.subtitle}>
          A list of projects that I’ve worked on.
        </p>
      </section>
    </div>
  );
};

export default Project;
