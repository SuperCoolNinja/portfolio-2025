import type { Dispatch, SetStateAction } from "react";

export interface IButton {
  id: number;
  label: string;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}
