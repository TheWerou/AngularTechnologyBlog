import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Section, Post, Category, User, MainSite, PostDto } from 'src/app/shared/data/InterFaces/InterFaces';
import { DataBaseService } from 'src/app/services/data-base.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {
  newArticle: PostDto;
  newSection: Section[];
  formGrup: FormGroup;
  categoryList: Category[];
  selectedCategory: Category = null;

  constructor(public formBuilder: FormBuilder, private backend: DataBaseService) {

  }

  ngOnInit(): void {
    this.catList();
    this.formGrup = this.formBuilder.group({
      title: new FormControl(),
      Category: new FormControl(),
      PostText: new FormControl(),
      ReadTime: new FormControl(),
    });
  }
  selectCategory(selected: Category): void {
    this.selectedCategory = selected;
    console.log(this.selectedCategory.id)
  }
  public catList()
  {
    this.categoryList = this.backend.getCategory();
  }
  save() {

    let forms = this.formGrup.getRawValue() as PostDto;
    forms.Category = this.selectedCategory;
    this.backend.createPost(forms);
  }

}
