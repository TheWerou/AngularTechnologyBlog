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
  
  public Categorys: Category[] = [
    { id: 1, title: 'Newsy', CategoryText: 'Co słychać w informatyce?', image: "assets/news_background.jpg"},
    { id: 2, title: 'C#', CategoryText: 'C# .Net ASP.Net', image: "assets/net_background.png"},
    { id: 3, title: 'Python', CategoryText: 'Python, Django, Sztuczna inteligencja', image: "assets/python_background.jpg"},
    { id: 4, title: 'Ciekawostki', CategoryText: 'Ciekawe rzeczy, sztuczki, gadżety', image: "assets/interesting_backgorund.jpg"},
    { id: 5, title: 'Tutoriale', CategoryText: 'Porady, Tutoriale, Checklisty', image: "assets/tutorial_background.jpg"},
  ];
  public Posts: Post[] = [
    { id: 1, title: 'Dr Nice', Category: this.Categorys[0], ReadTime: 15 ,DescriptionText: 'cos tam cos tam', PostText: 'cos tam cos tam', },
    { id: 2, title: 'Dr Nice2', Category: this.Categorys[4], ReadTime: 5 ,DescriptionText: 'cos tam cos tam', PostText: 'cos tam cos tam', },
    { id: 3, title: 'Dr Nice3', Category: this.Categorys[1], ReadTime: 7 ,DescriptionText: 'cos tam cos tam', PostText: 'cos tam cos tam', },
    { id: 4, title: 'Dr Nice4',Category: this.Categorys[2], ReadTime: 8 ,DescriptionText: 'cos tam cos tam', PostText: 'cos tam cos tam', },
    { id: 5, title: 'Dr Nice5',Category: this.Categorys[1], ReadTime: 10 ,DescriptionText: 'cos tam cos tam', PostText: 'cos tam cos tam', },
    { id: 6, title: 'Dr Nice6',Category: this.Categorys[2], ReadTime: 12 ,DescriptionText: 'cos tam cos tam', PostText: 'cos tam cos tam', },
    { id: 7, title: 'Dr Nice7',Category: this.Categorys[3], ReadTime: 11 ,DescriptionText: 'cos tam cos tam', PostText: 'cos tam cos tam', },
    { id: 8, title: 'Dr Nice8',Category: this.Categorys[2], ReadTime: 12 ,DescriptionText: 'cos tam cos tam', PostText: 'cos tam cos tam', },
    { id: 9, title: 'Dr Nice9',Category: this.Categorys[1], ReadTime: 22 ,DescriptionText: 'cos tam cos tam', PostText: 'cos tam cos tam', },
    { id: 10, title: 'Dr Nice10',Category: this.Categorys[4], ReadTime: 32 ,DescriptionText: 'cos tam cos tam', PostText: 'cos tam cos tam', },
    { id: 11, title: 'Dr Nice11',Category: this.Categorys[4], ReadTime: 12 ,DescriptionText: 'cos tam cos tam', PostText: 'cos tam cos tam', },
    { id: 12, title: 'Dr Nice12',Category: this.Categorys[3], ReadTime: 12 ,DescriptionText: 'cos tam cos tam', PostText: 'cos tam cos tam', },
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
