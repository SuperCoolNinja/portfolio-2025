export interface MenuProps {
  items: string[];
  selected: string;
  onSelect: (item: string) => void;
}
