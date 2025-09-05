import styles from "../about.module.css";

const OpenToWork: React.FunctionComponent = () => {
  const lookingForJob = true;

  if (!lookingForJob) {
    return null;
  }

  return (
    <div className={styles.look_job_container}>
      <p className={styles.look_job_title}>open to work</p>
    </div>
  );
};

export default OpenToWork;
