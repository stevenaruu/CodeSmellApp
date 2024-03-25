import { ISmellGroup } from "../../interfaces/smell.interfaces";

export interface INavbar {
  name: string;
  listSmell: ISmellGroup[];
  direct?: (id: number) => void
}