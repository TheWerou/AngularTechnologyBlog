import { Component, OnInit } from '@angular/core';
import { DataBaseService } from 'src/app/services/data-base.service';
import { Section, Post, Category, User, MainSite } from 'src/app/shared/data/InterFaces/InterFaces';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DeletePopupComponent } from './delete-popup/delete-popup.component';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss']
})
export class ArticleViewComponent implements OnInit {

  constructor(
    private backend: DataBaseService,
    private route: ActivatedRoute,
    private _modalService: BsModalService) { }

  public imagePath: string
  id: number;
  post: Post;
  mainImgUrl: string;
  imgsUrls: string[] = [];
  addvertisedPost: Post[];
  public isLoged = false;
  faTrash = faTrash;

  ngOnInit(): void {
    this.imagePath = "assets/placeholder.jpg";

    this.backend.logedstatus.subscribe((value) => {
      this.isLoged = value;
      console.log(this.isLoged);
    });

    this.route.paramMap.subscribe((params: ParamMap) => { 
      this.id = +params.get("articleId");
    });
    this.list(this.id);
  }
  public list(id: number) {
    this.post = this.backend.getOnePost(id);
    this.addvertisedPost = this.backend.getRandomPosts();
    console.log(this.post);
    console.log(this.mainImgUrl);
    console.log(this.imgsUrls);
  }

  deletePopUp() {
    let addOrderDialog: BsModalRef;
    addOrderDialog = this._modalService.show(DeletePopupComponent, {
      class: "modal-lg",
      initialState: {
      },
    });
  }
  
}
