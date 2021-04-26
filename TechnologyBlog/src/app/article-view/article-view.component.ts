import { Component, OnInit } from '@angular/core';
import { DataBaseService } from 'src/app/services/data-base.service';
import { Section, Post, Category, User, MainSite } from 'src/app/shared/data/InterFaces/InterFaces';
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss']
})
export class ArticleViewComponent implements OnInit {

  constructor(
    private backend: DataBaseService,
    private route: ActivatedRoute,) { }

  public imagePath: string
  id: number;
  post: Post;
  mainImgUrl: string;
  imgsUrls: string[] = [];


  ngOnInit(): void {
    this.imagePath = "assets/placeholder.jpg";
    this.route.paramMap.subscribe((params: ParamMap) => { 
      this.id = +params.get("articleId");
      this.list(this.id);
    });

  }
  public list(id: number) {
    this.post = this.backend.getOnePost(id);
    this.showMainFile(this.post.image);
    this.showSectionFile(this.post.Sections)
    console.log(this.post);
    console.log(this.mainImgUrl);
    console.log(this.imgsUrls);
  }

  showMainFile(item: File)
  {

    const reader = new FileReader();
    reader.onload = () => {
      this.mainImgUrl = reader.result as string;
    }
    reader.readAsDataURL(item)

    console.log(this.mainImgUrl);
  }

  showSectionFile(item: Section[])
  {
    
    item.forEach(async c => {
      let sectionReader = new FileReader();
      sectionReader.onload = () => {
        this.imgsUrls.push(sectionReader.result as string); 
      };
      if(c.image != null)
      {
        await sectionReader.readAsDataURL(c.image);
      }
      else{
        this.imgsUrls.push("");
      }
    });

    console.log(this.imgsUrls);
  }


}
