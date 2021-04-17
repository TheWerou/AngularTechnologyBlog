import { Component, OnInit } from '@angular/core';
import  {DataBaseService } from 'src/app/services/data-base.service';
import { Section, Post, Category, User,MainSite } from 'src/app/shared/data/InterFaces/InterFaces';

@Component({
  selector: 'app-main-blog',
  templateUrl: './main-blog.component.html',
  styleUrls: ['./main-blog.component.scss']
})
export class MainBlogComponent implements OnInit {
  public imagePath: string
  constructor(private backend: DataBaseService) { }
  mainSite: MainSite;

  ngOnInit(): void {
    this.imagePath = "assets/placeholder.jpg";
  }
  public list(){
   this.mainSite = this.backend.getMainSite();
  }
}
