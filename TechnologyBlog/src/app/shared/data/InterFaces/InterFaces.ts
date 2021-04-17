export interface Section {
  id: number;
  title: string;
  SectionText: string;
  image?: File
}
export interface Post {
  id: number;
  title: string;
  PostText: string;
  image?: File
  Sections?: Section[];
}
export interface Category {
  id: number;
  title: string;
  CategoryText: string;
  image?: File
  Posts?: Post[];
}
export interface User {
  id: number;
  Name: string;
  Pass: string;
  image?: File
}
export interface MainSite {
  id: number;
  title: string;
  leftDescription: string;
  rightDescription: string;
  image?: File
}