export interface Esdeveniment {
  id: number;
  title: string;
  description: string;
  dates: string;
  hours: string;
  duration: string;
  image: string;
  btn: string;
}

export interface EsdevenimentsData {
  esdeveniments: Esdeveniment[];
}