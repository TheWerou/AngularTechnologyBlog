import { formatDate } from '@angular/common';
import { Injectable, EventEmitter,OnInit } from '@angular/core';
import { Section, Post, Category, User, MainSite, PostDto, SearchDto } from 'src/app/shared/data/InterFaces/InterFaces';
import { from, Observable, Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {
  public Sections: Section[] = [
    { id: 1, title: 'Wstęp', imagePath: "assets/python_background.jpg", SectionText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex ligula, pretium ut hendrerit vehicula, pharetra sit amet ligula. Curabitur blandit, orci id eleifend scelerisque, nisl sapien vulputate magna, in laoreet tellus lectus eget metus. Vivamus elementum quam augue, in tincidunt mauris iaculis et. Morbi quis lectus sit amet nisl feugiat tempus. Sed id augue elit. Etiam vitae faucibus eros. Nulla quis pretium nisl, pharetra consequat libero. Mauris interdum diam sed eros convallis, ac suscipit sem suscipit. Donec non quam mi. Quisque eu velit a sapien auctor interdum.', },
    { id: 2, title: 'Dlaczego czasem warto dać szanse innemu językowi', SectionText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex ligula, pretium ut hendrerit vehicula, pharetra sit amet ligula. Curabitur blandit, orci id eleifend scelerisque, nisl sapien vulputate magna, in laoreet tellus lectus eget metus. Vivamus elementum quam augue, in tincidunt mauris iaculis et. Morbi quis lectus sit amet nisl feugiat tempus. Sed id augue elit. Etiam vitae faucibus eros. Nulla quis pretium nisl, pharetra consequat libero. Mauris interdum diam sed eros convallis, ac suscipit sem suscipit. Donec non quam mi. Quisque eu velit a sapien auctor interdum.', },
    { id: 3, title: 'A może pozostać wiernym jednej technologi ?',imagePath: "assets/python_background.jpg", SectionText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex ligula, pretium ut hendrerit vehicula, pharetra sit amet ligula. Curabitur blandit, orci id eleifend scelerisque, nisl sapien vulputate magna, in laoreet tellus lectus eget metus. Vivamus elementum quam augue, in tincidunt mauris iaculis et. Morbi quis lectus sit amet nisl feugiat tempus. Sed id augue elit. Etiam vitae faucibus eros. Nulla quis pretium nisl, pharetra consequat libero. Mauris interdum diam sed eros convallis, ac suscipit sem suscipit. Donec non quam mi. Quisque eu velit a sapien auctor interdum.', },
    { id: 4, title: 'Podsumowanie', SectionText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex ligula, pretium ut hendrerit vehicula, pharetra sit amet ligula. Curabitur blandit, orci id eleifend scelerisque, nisl sapien vulputate magna, in laoreet tellus lectus eget metus. Vivamus elementum quam augue, in tincidunt mauris iaculis et. Morbi quis lectus sit amet nisl feugiat tempus. Sed id augue elit. Etiam vitae faucibus eros. Nulla quis pretium nisl, pharetra consequat libero. Mauris interdum diam sed eros convallis, ac suscipit sem suscipit. Donec non quam mi. Quisque eu velit a sapien auctor interdum.', },

  ];
  
  private testSections: Section[] = [this.Sections[0],this.Sections[1],this.Sections[2],this.Sections[3]];

  public Categorys: Category[] = [
    { id: 1, title: 'Newsy', CategoryText: 'Co słychać w informatyce?', image: "assets/news_background.jpg"},
    { id: 2, title: 'C#', CategoryText: 'C# .Net ASP.Net', image: "assets/net_background.png"},
    { id: 3, title: 'Python', CategoryText: 'Python, Django, Sztuczna inteligencja', image: "assets/python_background.jpg"},
    { id: 4, title: 'Ciekawostki', CategoryText: 'Ciekawe rzeczy, sztuczki, gadżety', image: "assets/interesting_backgorund.jpg"},
    { id: 5, title: 'Tutoriale', CategoryText: 'Porady, Tutoriale, Checklisty', image: "assets/tutorial_background.jpg"},
  ];
  public Posts: Post[] = [
    { id: 1, title: 'Coraz więcej ludzi programuje w HTML', Category: this.Categorys[0], ReadTime: 15 , date: '20/12/2021' ,DescriptionText: 'Coraz więcej ludzi programuje w HTML', PostText: 'cos tam cos tam', Sections: this.testSections, imagePath: "assets/python_background.jpg" },
    { id: 2, title: 'Jak zrobić a się nie narobić?', Category: this.Categorys[4], ReadTime: 5 , date: '02/08/2020' ,DescriptionText: 'Jak zrobić a się nie narobić?', PostText: 'cos tam cos tam', Sections: this.testSections, imagePath: "assets/1.png"},
    { id: 3, title: 'Entity frameworkk', Category: this.Categorys[1], ReadTime: 7 , date: '14/05/2019' ,DescriptionText: 'Entity frameworkk', PostText: 'cos tam cos tam', Sections: this.testSections, imagePath: "assets/2.jpg"},
    { id: 4, title: 'Migracje w Django',Category: this.Categorys[2], ReadTime: 8 , date: '25/01/2020' ,DescriptionText: 'Migracje w Django', PostText: 'cos tam cos tam', Sections: this.testSections, imagePath: "assets/3.jpg"},
    { id: 5, title: 'File table w Entity framework',Category: this.Categorys[1], ReadTime: 10 , date: '22/02/2021' ,DescriptionText: 'File table w Entity framework', PostText: 'cos tam cos tam', Sections: this.testSections, imagePath: "assets/4.jpg"},
    { id: 6, title: 'GUI w PyQt',Category: this.Categorys[2], ReadTime: 12 , date: '21/03/2020' ,DescriptionText: 'GUI w PyQt', PostText: 'cos tam cos tam', Sections: this.testSections, imagePath: "assets/python_background.jpg"},
    { id: 7, title: 'Sztuczna inteligencja w nowym iphonie',Category: this.Categorys[3], ReadTime: 11 , date: '21/03/2018' ,DescriptionText: 'cos tam cos tam', PostText: 'cos tam cos tam', Sections: this.testSections, imagePath: "assets/5.jpg"},
    { id: 8, title: 'Aplikacja mobina w pythonie',Category: this.Categorys[2], ReadTime: 12 , date: '21/12/2021' ,DescriptionText: 'cos tam cos tam', PostText: 'cos tam cos tam',Sections: this.testSections , imagePath: "assets/6.jpg"},
    { id: 9, title: 'Xamarin co i jak',Category: this.Categorys[1], ReadTime: 22 , date: '22/05/2020' ,DescriptionText: 'cos tam cos tam', PostText: 'cos tam cos tam', Sections: this.testSections, imagePath: "assets/7.jpg"},
    { id: 10, title: 'Podstawowy kurs c++',Category: this.Categorys[4], ReadTime: 32 , date: '17/06/2020' ,DescriptionText: 'cos tam cos tam', PostText: 'cos tam cos tam', Sections: this.testSections, imagePath: "assets/1.png"},
    { id: 11, title: 'Pojemniki na dane jak z nich korzystać i po co?',Category: this.Categorys[4], ReadTime: 12 , date: '20/12/2021' ,DescriptionText: 'cos tam cos tam', PostText: 'cos tam cos tam', Sections: this.testSections, imagePath: "assets/4.jpg"},
    { id: 12, title: 'Elon musk wydaje smartfona',Category: this.Categorys[3], ReadTime: 12 , date: '24/12/2021' ,DescriptionText: 'cos tam cos tam', PostText: 'cos tam cos tam', Sections: this.testSections,imagePath: "assets/5.jpg"},
  ];
  public Users: User[] = [
    { id: 1, Name: 'Adam', Pass: '123qwe', },
    { id: 2, Name: 'Tomek', Pass: '123qwe', },
    { id: 3, Name: 'Michal', Pass: '123qwe', },
    { id: 4, Name: 'Ania', Pass: '123qwe', },
    { id: 5, Name: 'Kasia', Pass: '123qwe', },
  ];
  public MainSite: MainSite = { id: 1, title: 'Newsy', leftDescription: 'cos tam cos tam', rightDescription: 'cos tam cos tam' };

  constructor() { 
    this.logedstatus.subscribe((value) => {
      this.iSLoged = value
  });
  }
  iSLoged: boolean = false;
  logedstatus: Subject<boolean> = new Subject<boolean>();
  searchOutput: Post[]

  ngOnInit(): void {
    
  }

  changeIsLogedValue(value: boolean) {
    this.logedstatus.next(value);
}

  isValid():boolean
  {
    if (sessionStorage.getItem('User') != null && sessionStorage.getItem('Pass') != null) {
      if (sessionStorage.getItem('User') == "wojtus" && sessionStorage.getItem('Pass') == "123qwe") {
        this.changeIsLogedValue(true);
        return true;
      }
      return false;
    }
    else {
      return false;
    }
  }

  logOut()
  {
    this.changeIsLogedValue(false);
    sessionStorage.clear();
  }

  getSection(): Section[]{
    return this.Sections;
  }

  getPost(): Post[]{
    return this.Posts;
  }

  getOnePost(id: number): Post{
    return this.Posts.find(c => c.id == id);
  }

  search(dto: SearchDto)
  {
    console.log(this.searchInPostTitle(dto.searchText));
    console.log(this.searchTime(dto));
    console.log(this.searchCategory(dto));
    console.log(this.searchDate(dto));

    let firstcom = this.combineTwo(this.searchInPostTitle(dto.searchText),this.searchTime(dto));
    let sectcom = this.combineTwo(this.searchCategory(dto),this.searchDate(dto));
    let finalCom = this.combineTwo(firstcom, sectcom);

    console.log(firstcom);
    console.log(sectcom);
    console.log(finalCom);

    this.searchOutput = finalCom;
  }

  getSearch()
  {
    return this.searchOutput;
  }

  combineTwo(firstList: Post[], secondList: Post[])
  {
    let list = [];

    if(firstList.length == 0)
    {
      return secondList;
    }

    if(secondList.length == 0)
    {
      return firstList;
    }

    firstList.forEach(firstitem => {
      secondList.forEach(seconditem => {
        if(JSON.stringify(firstitem) === JSON.stringify(seconditem))
        {
          list.push(firstitem);
        }
      })
    })
    return list;
  }

  searchDate(dto: SearchDto)
  {
    if(dto.date == null)
    {
      return []
    }
    return this.Posts.filter(c => c.date == formatDate(dto.date, 'dd/MM/yyyy', 'en'));
  }

  searchCategory(dto: SearchDto)
  {
    return this.Posts.filter(c => c.Category == dto.Category);
  }

  searchTime(dto: SearchDto){
    if(dto.minTime != null && dto.maxTime != null)
    {
      return this.Posts.filter(c => c.ReadTime >= Number(dto.minTime) && c.ReadTime <= Number(dto.maxTime));
    }
    else if (dto.maxTime == null)
    {
      return this.Posts.filter(c => c.ReadTime >= Number(dto.minTime));
    }
    else if (dto.minTime == null){
      return this.Posts.filter(c => c.ReadTime <= Number(dto.maxTime));
    }
    else{
      return null;
    }
  }

  searchInPostTitle(textToFind: string)
  {
    return this.Posts.filter(c=> c.title.includes(textToFind));
  }

  createPost(postDto: PostDto): number {
    let newPost: Post = postDto as Post;
    newPost.id = this.Posts[this.Posts.length - 1].id + 1;
    newPost.date = formatDate(new Date(), 'dd/MM/yyyy', 'en');
    
    let sectionReader = new FileReader();

    sectionReader.onload = () => {
      newPost.imagePath = sectionReader.result as string; 
    };

    if(newPost.image != null)
    {
      sectionReader.readAsDataURL(newPost.image);
    }
    this.Posts.push(newPost);
    console.log(postDto.image);
    console.log(newPost.image);
    newPost.Sections.forEach(element => {
      this.createSection(element);
    });
    return newPost.id; 
  }

  createSection(section: Section)
  {
    section.id = this.Sections[this.Sections.length - 1].id + 1;
    
      let sectionReader = new FileReader();
      sectionReader.onload = () => {
        section.imagePath = sectionReader.result as string; 
      };

      if(section.image != null)
      {
        sectionReader.readAsDataURL(section.image);
      }
        
    this.Sections.push(section);

  }

  getPostCategory(categortId:number): Post[]{
    return this.Posts.filter(d => d.Category.id == categortId);
  }
  getUsers(): User[]{
    return this.Users;
  }
  getCategory(): Category[]{
    return this.Categorys;
  }
  getOneCategory(id:number): Category{
    return this.Categorys.find(c => c.id == id);
  }

  getMainSite(): MainSite
  {
    return this.MainSite;
  }

  getRandomPosts()
  {
    let ouptSet = new Set<Post>();
    let outputlist: Post[] = [];
    var number; 
    var iterator = 0;
    while(iterator < 5)
    {
      number = this.randomIntFromInterval(0, this.Posts.length);
      if(!ouptSet.has(this.Posts[number]))
      {
        ouptSet.add(this.Posts[number])
        iterator += 1;
      }
      
    }
    return Array.from(ouptSet);
  }

  randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
