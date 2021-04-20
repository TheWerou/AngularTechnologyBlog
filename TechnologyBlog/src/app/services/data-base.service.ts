import { Injectable } from '@angular/core';
import { Section, Post, Category, User, MainSite, PostDto } from 'src/app/shared/data/InterFaces/InterFaces';

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
    { id: 1, title: 'Coraz więcej ludzi programuje w HTML', Category: this.Categorys[0], ReadTime: 15 , date: '20/12/2021' ,DescriptionText: 'Coraz więcej ludzi programuje w HTML', PostText: 'cos tam cos tam', },
    { id: 2, title: 'Jak zrobić a się nie narobić?', Category: this.Categorys[4], ReadTime: 5 , date: '02/08/2020' ,DescriptionText: 'Jak zrobić a się nie narobić?', PostText: 'cos tam cos tam', },
    { id: 3, title: 'Entity frameworkk', Category: this.Categorys[1], ReadTime: 7 , date: '14/05/2019' ,DescriptionText: 'Entity frameworkk', PostText: 'cos tam cos tam', },
    { id: 4, title: 'Migracje w Django',Category: this.Categorys[2], ReadTime: 8 , date: '25/01/2020' ,DescriptionText: 'Migracje w Django', PostText: 'cos tam cos tam', },
    { id: 5, title: 'File table w Entity framework',Category: this.Categorys[1], ReadTime: 10 , date: '22/02/2021' ,DescriptionText: 'File table w Entity framework', PostText: 'cos tam cos tam', },
    { id: 6, title: 'GUI w PyQt',Category: this.Categorys[2], ReadTime: 12 , date: '21/03/2020' ,DescriptionText: 'GUI w PyQt', PostText: 'cos tam cos tam', },
    { id: 7, title: 'Sztuczna inteligencja w nowym iphonie',Category: this.Categorys[3], ReadTime: 11 , date: '21/03/2018' ,DescriptionText: 'cos tam cos tam', PostText: 'cos tam cos tam', },
    { id: 8, title: 'Aplikacja mobina w pythonie',Category: this.Categorys[2], ReadTime: 12 , date: '21/12/2021' ,DescriptionText: 'cos tam cos tam', PostText: 'cos tam cos tam', },
    { id: 9, title: 'Xamarin co i jak',Category: this.Categorys[1], ReadTime: 22 , date: '22/05/2020' ,DescriptionText: 'cos tam cos tam', PostText: 'cos tam cos tam', },
    { id: 10, title: 'Podstawowy kurs c++',Category: this.Categorys[4], ReadTime: 32 , date: '17/06/2020' ,DescriptionText: 'cos tam cos tam', PostText: 'cos tam cos tam', },
    { id: 11, title: 'Pojemniki na dane jak z nich korzystać i po co?',Category: this.Categorys[4], ReadTime: 12 , date: '20/12/2021' ,DescriptionText: 'cos tam cos tam', PostText: 'cos tam cos tam', },
    { id: 12, title: 'Elon musk wydaje smartfona',Category: this.Categorys[3], ReadTime: 12 , date: '24/12/2021' ,DescriptionText: 'cos tam cos tam', PostText: 'cos tam cos tam', },
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
  createPost(postDto: PostDto): void {
    let newPost: Post = postDto as Post;
    newPost.id = this.Posts[this.Posts.length - 1].id + 1;
    newPost.date = Date.now().toString();
    this.Posts.push(newPost);
  }

  getPostCategory(categortId:number): Post[]{
    return this.Posts.filter(d => d.Category.id === categortId)
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
