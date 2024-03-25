export interface ICode {
  id: number;
  class: string;
  code: string
}

export interface ISmellGroup {
  id: number;
  name: string;
  description: string;
  solutions: string[];
  type: string;
  codeBefore: ICode[];
  codeAfter: ICode[];
}

export interface ISmell {
  id: number;
  name: string;
  type: string;
  description: string;
  style: string;
  owner: string;
  volume: string;
  smell: ISmellGroup[];
}