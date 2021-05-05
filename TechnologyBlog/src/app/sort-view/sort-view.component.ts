import { Component, OnInit } from '@angular/core';
import { DataBaseService } from 'src/app/services/data-base.service';
import { Section, Post, Category, User, MainSite } from 'src/app/shared/data/InterFaces/InterFaces';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-sort-view',
  templateUrl: './sort-view.component.html',
  styleUrls: ['./sort-view.component.scss']
})
export class SortViewComponent implements OnInit {

  constructor(private backend: DataBaseService,private route: ActivatedRoute) { }

  public imagePath: string
  iconArrow = faArrowRight;
  mainSite: MainSite;
  posts: Post[];
  mainLoop: number;
  subLoop: number = 2;
  id: number;
  private sub: any;
  
  ngOnInit(): void {
    this.imagePath = "assets/placeholder.jpg";
    this.articleList();
    console.log(this.posts);
  }

  public articleList() {
    this.posts = this.backend.getSearch();
  }

}
