export interface Section {
  id: number;
  title: string;
  SectionText: string;
  image?: File
  imagePath?: string;
}
export interface Post {
  id: number;
  date: string;
  title: string;
  Category: Category;
  DescriptionText: string;
  PostText: string;
  ReadTime: number;
  image?: File
  imagePath?: string
  Sections?: Section[];
}
export interface Category {
  id: number;
  title: string;
  CategoryText: string;
  image?: string;
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
export interface PostDto {
  title: string;
  Category: Category;
  DescriptionText: string;
  PostText: string;
  ReadTime: number;
  image?: File
  Sections?: Section[];
}
export interface SearchDto {
  amountPhoto: string,
  minTime: string,
  maxTime: string,
  searchText: string,
  date: Date;
  Category: Category;
}