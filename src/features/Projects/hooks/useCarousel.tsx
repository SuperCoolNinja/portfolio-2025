import { useMemo, useState } from "react";
import type { IProjectsData } from "../../../interfaces/IProjectsData";

export function useCarousel(projects: IProjectsData[], cardsPerView: number) {
  const [current, setCurrent] = useState(0);
  const total = Math.ceil(projects.length / cardsPerView);

  const visible = useMemo(() => {
    const start = current * cardsPerView;
    return projects.slice(start, start + cardsPerView);
  }, [projects, current, cardsPerView]);

  return { current, total, visible, setCurrent };
}
