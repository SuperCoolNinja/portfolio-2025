import React, { useState, useEffect } from "react";
import styles from "../project.module.css";
import type { IProjectsData } from "../../../interfaces/IProjectsData";
import CardItem from "./Card";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

const CardListSlider: React.FunctionComponent<{
  projects: IProjectsData[];
}> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  // Déterminer le nombre de cartes à afficher selon la taille d'écran
  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);

    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  // Reset index quand cardsPerView change
  useEffect(() => {
    setCurrentIndex(0);
  }, [cardsPerView]);

  const totalSlides = Math.ceil(projects.length / cardsPerView);
  const maxIndex = Math.max(0, totalSlides - 1);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === maxIndex ? 0 : prevIndex + 1
    );
  };

  const getVisibleProjects = () => {
    const startIndex = currentIndex * cardsPerView;
    return projects.slice(startIndex, startIndex + cardsPerView);
  };

  if (projects.length === 0) {
    return <div>Aucun projet à afficher</div>;
  }

  return (
    <div className={styles.carousel_container}>
      <div className={styles.carousel_wrapper}>
        <div className={styles.cards_list_container}>
          {getVisibleProjects().map((project) => (
            <div key={project.id} className={styles.card_slide}>
              <CardItem project={project} />
            </div>
          ))}
        </div>
      </div>

      {totalSlides > 1 && (
        <div className={styles.carousel_controls}>
          <button
            className={styles.carousel_btn}
            onClick={goToPrevious}
            aria-label="prev"
          >
            <ArrowBigLeft />
          </button>
          <div className={styles.carousel_dots}>
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`${styles.carousel_dot} ${
                  index === currentIndex ? styles.carousel_dot_active : ""
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`next ${index + 1}`}
              />
            ))}
          </div>
          <button
            className={styles.carousel_btn}
            onClick={goToNext}
            aria-label="next"
          >
            <ArrowBigRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default CardListSlider;
