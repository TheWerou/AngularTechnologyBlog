import { Injectable } from '@angular/core';
import { Section, Post, Category, User,MainSite } from 'src/app/shared/data/InterFaces/InterFaces';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {
  public Sections: Section[] = [
    { id: 1, title: 'Dr Nice', SectionText: 'cos tam cos tam', },
    { id: 2, title: 'Dr Nice2', SectionText: 'cos tam cos tam', },
    { id: 3, title: 'Dr Nice3', SectionText: 'cos tam cos tam', },
    { id: 4, title: 'Dr Nice4', SectionText: 'cos tam cos tam', },
    { id: 5, title: 'Dr Nice5', SectionText: 'cos tam cos tam', },
    { id: 6, title: 'Dr Nice6', SectionText: 'cos tam cos tam', },
    { id: 7, title: 'Dr Nice7', SectionText: 'cos tam cos tam', },
    { id: 8, title: 'Dr Nice8', SectionText: 'cos tam cos tam', },
    { id: 9, title: 'Dr Nice9', SectionText: 'cos tam cos tam', },
    { id: 10, title: 'Dr Nice10', SectionText: 'cos tam cos tam', },
    { id: 11, title: 'Dr Nice11', SectionText: 'cos tam cos tam', },
    { id: 12, title: 'Dr Nice12', SectionText: 'cos tam cos tam', },
  ];
  public Posts: Post[] = [
    { id: 1, title: 'Dr Nice', PostText: 'cos tam cos tam', },
    { id: 2, title: 'Dr Nice2', PostText: 'cos tam cos tam', },
    { id: 3, title: 'Dr Nice3', PostText: 'cos tam cos tam', },
    { id: 4, title: 'Dr Nice4', PostText: 'cos tam cos tam', },
    { id: 5, title: 'Dr Nice5', PostText: 'cos tam cos tam', },
    { id: 6, title: 'Dr Nice6', PostText: 'cos tam cos tam', },
    { id: 7, title: 'Dr Nice7', PostText: 'cos tam cos tam', },
    { id: 8, title: 'Dr Nice8', PostText: 'cos tam cos tam', },
    { id: 9, title: 'Dr Nice9', PostText: 'cos tam cos tam', },
    { id: 10, title: 'Dr Nice10', PostText: 'cos tam cos tam', },
    { id: 11, title: 'Dr Nice11', PostText: 'cos tam cos tam', },
    { id: 12, title: 'Dr Nice12', PostText: 'cos tam cos tam', },
  ];
  public Categorys: Category[] = [
    { id: 1, title: 'Newsy', CategoryText: 'Co słychać w informatyce?', },
    { id: 2, title: 'C#', CategoryText: 'C# .Net ASP.Net', },
    { id: 3, title: 'Python', CategoryText: 'Python, Django, Sztuczna inteligencja', },
    { id: 4, title: 'Ciekawostki', CategoryText: 'Ciekawe rzeczy, sztuczki, gadżety', },
    { id: 5, title: 'Tutoriale', CategoryText: 'Porady, Tutoriale, Checklisty', },
  ];
  public Users: User[] = [
    { id: 1, Name: 'Adam', Pass: '123qwe', },
    { id: 2, Name: 'Tomek', Pass: '123qwe', },
    { id: 3, Name: 'Michal', Pass: '123qwe', },
    { id: 4, Name: 'Ania', Pass: '123qwe', },
    { id: 5, Name: 'Kasia', Pass: '123qwe', },
  ];
  public MainSite: MainSite = { id: 1, title: 'Newsy', leftDescription: 'cos tam cos tam', rightDescription: 'cos tam cos tam' };

  constructor() { }

  getSection(): Section[]{
    return this.Sections;
  }

  getPost(): Post[]{
    return this.Posts;
  }
  getUsers(): User[]{
    return this.Users;
  }
  getCategory(): Category[]{
    return this.Categorys;
  }
  getOneCategory(id:number): Category{
    return this.Categorys.find(c => c.id === id);
  }

  getMainSite(): MainSite
  {
    return this.MainSite;
  }
}
