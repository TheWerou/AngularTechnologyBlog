import { Component, OnInit } from '@angular/core';
import { DataBaseService } from 'src/app/services/data-base.service';
import { Section, Post, Category, User, MainSite } from 'src/app/shared/data/InterFaces/InterFaces';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.scss']
})
export class CategoryViewComponent implements OnInit {

  constructor(
    private backend: DataBaseService,
    private route: ActivatedRoute,) { }

  iconArrow = faArrowRight;
  categorySite: Category;
  public imagePath: string
  id: number;
  posts: Post[];
  public imgsUrls: string[];

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => { 
      this.id = +params.get("categoryId");
      this.imgsUrls = [];
      this.list(); 
      this.articleList();
    });
  }

  public list() {
    this.categorySite = this.backend.getOneCategory(this.id);
    this.imagePath = this.categorySite.image;
  }

  public articleList() {
    this.posts = this.backend.getPostCategory(this.id).reverse();
    this.showSectionFile(this.posts);
  }


  showSectionFile(item: Post[])
  {
    
    item.forEach(c => {
      let sectionReader = new FileReader();
      sectionReader.onload = () => {
        this.imgsUrls.push( sectionReader.result as string); 
      };
      if(c.image != null)
      {
        sectionReader.readAsDataURL(c.image);
      }
      else{
        this.imgsUrls.push("");
      }
        
    });
    console.log(this.imgsUrls);
  }
  

}
