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
  const [animation, setAnimation] = useState<"slide-in" | "slide-out" | "">(
    "slide-in"
  );

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

  useEffect(() => {
    setCurrentIndex(0);
  }, [cardsPerView]);

  const totalSlides = Math.ceil(projects.length / cardsPerView);
  const maxIndex = Math.max(0, totalSlides - 1);

  const changeSlide = (newIndex: number) => {
    setAnimation("slide-out");
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setAnimation("slide-in");
    }, 400); // durée de la transition
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? maxIndex : currentIndex - 1;
    changeSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === maxIndex ? 0 : currentIndex + 1;
    changeSlide(newIndex);
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
        <div
          className={`${styles.cards_list_container} ${
            animation ? styles[animation] : ""
          }`}
        >
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
                onClick={() => changeSlide(index)}
                aria-label={`go to ${index + 1}`}
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
