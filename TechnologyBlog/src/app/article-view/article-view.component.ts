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
  addvertisedPost: Post[];


  ngOnInit(): void {
    this.imagePath = "assets/placeholder.jpg";
    this.route.paramMap.subscribe((params: ParamMap) => { 
      this.id = +params.get("articleId");
      this.list(this.id);
    });

  }
  public list(id: number) {
    this.post = this.backend.getOnePost(id);
    this.addvertisedPost = this.backend.getRandomPosts();
    this.post.imagePath = "assets/placeholder.jpg";
    console.log(this.post);
    console.log(this.mainImgUrl);
    console.log(this.imgsUrls);
  }

  
}
