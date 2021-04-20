import { Component, OnInit } from '@angular/core';
import { DataBaseService } from 'src/app/services/data-base.service';
import { Section, Post, Category, User, MainSite } from 'src/app/shared/data/InterFaces/InterFaces';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-blog',
  templateUrl: './main-blog.component.html',
  styleUrls: ['./main-blog.component.scss']
})
export class MainBlogComponent implements OnInit {

  constructor(private backend: DataBaseService) { }

  public imagePath: string
  iconArrow = faArrowRight;
  mainSite: MainSite;
  posts: Post[];
  mainLoop: number;
  subLoop: number = 2;

  ngOnInit(): void {
    this.imagePath = "assets/placeholder.jpg";
    this.articleList();

  }
  public list() {
    this.mainSite = this.backend.getMainSite();
  }

  public articleList() {
    this.posts = this.backend.getPost();
  }

  
}

