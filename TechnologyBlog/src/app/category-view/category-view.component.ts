import { Component, OnInit } from '@angular/core';
import  {DataBaseService } from 'src/app/services/data-base.service';
import { Section, Post, Category, User,MainSite } from 'src/app/shared/data/InterFaces/InterFaces';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.scss']
})
export class CategoryViewComponent implements OnInit {

  constructor(private backend: DataBaseService) { }
  iconArrow = faArrowRight;
  mainSite: MainSite;
  public imagePath: string
  ngOnInit(): void {
    this.imagePath = "assets/placeholder.jpg";
  }
  public list(){
   this.mainSite = this.backend.getMainSite();
  }

}
