import img from "../../assets/img.png";
import styles from "./profil_picture.module.css";

export const ProfilPicture: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <img className={styles.img_size} src={img} alt="profil picture" />
    </div>
  );
};
