import type { Dispatch, SetStateAction } from "react";

export interface IButton {
  label: string;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}
