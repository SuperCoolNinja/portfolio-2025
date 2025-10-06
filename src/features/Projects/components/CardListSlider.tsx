import React, { useState } from "react";
import styles from "../project.module.css";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import type { IProjectsData } from "../../../interfaces/IProjectsData";
import CardItem from "./Card";
import { useCarousel } from "../hooks/useCarousel";

const NavButton = ({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) => {
  const Icon = direction === "prev" ? ArrowBigLeft : ArrowBigRight;
  const positionClass =
    direction === "prev" ? styles.carousel_nav_prev : styles.carousel_nav_next;

  return (
    <div className={`${styles.carousel_nav} ${positionClass}`}>
      <button
        className={styles.carousel_btn}
        onClick={onClick}
        aria-label={direction}
      >
        <Icon />
      </button>
    </div>
  );
};

const Dots = ({
  total,
  current,
  onSelect,
}: {
  total: number;
  current: number;
  onSelect: (index: number) => void;
}) => (
  <div className={styles.carousel_controls}>
    <div className={styles.carousel_dots}>
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          className={`${styles.carousel_dot} ${
            i === current ? styles.carousel_dot_active : ""
          }`}
          onClick={() => onSelect(i)}
          aria-label={`go to slide ${i + 1}`}
        />
      ))}
    </div>
  </div>
);

const CardsList = ({
  projects,
  animation,
}: {
  projects: IProjectsData[];
  animation: "slide-in" | "slide-out" | "";
}) => (
  <div
    className={`${styles.cards_list_container} ${
      animation ? styles[animation] : ""
    }`}
  >
    {projects.map((p) => (
      <div key={p.id} className={styles.card_slide}>
        <CardItem project={p} />
      </div>
    ))}
  </div>
);

const CardListSlider = ({ projects }: { projects: IProjectsData[] }) => {
  const [cardsPerView, setCardsPerView] = useState(2); // ← état responsive

  React.useEffect(() => {
    const updateCardsPerView = () => {
      setCardsPerView(window.innerWidth >= 768 ? 2 : 1);
    };
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const { current, total, visible, setCurrent } = useCarousel(
    projects,
    cardsPerView
  );

  const [animation, setAnimation] = useState<"slide-in" | "slide-out" | "">(
    "slide-in"
  );

  const changeSlide = (index: number) => {
    setAnimation("slide-out");
    setTimeout(() => {
      setCurrent(index);
      setAnimation("slide-in");
    }, 400);
  };

  if (!projects.length) return <div>Aucun projet à afficher</div>;

  return (
    <div className={styles.carousel_container}>
      <div className={styles.carousel_wrapper}>
        {total > 1 && (
          <NavButton
            direction="prev"
            onClick={() => changeSlide((current - 1 + total) % total)}
          />
        )}
        <CardsList projects={visible} animation={animation} />
        {total > 1 && (
          <NavButton
            direction="next"
            onClick={() => changeSlide((current + 1) % total)}
          />
        )}
      </div>

      {total > 1 && (
        <Dots total={total} current={current} onSelect={changeSlide} />
      )}
    </div>
  );
};

export default CardListSlider;
