import { ISmellGroup } from "../../interfaces/smell.interfaces"

export interface IHeader {
  name: string;
  description: string;
  wallpaper: string;
  isNavbar: boolean;
  listSmell?: ISmellGroup[];
  direct?: (id: number) => void;
}