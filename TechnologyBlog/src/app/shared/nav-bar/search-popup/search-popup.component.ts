import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Section, Post, Category, User, MainSite, PostDto, SearchDto } from 'src/app/shared/data/InterFaces/InterFaces';
import { DataBaseService } from 'src/app/services/data-base.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-popup',
  templateUrl: './search-popup.component.html',
  styleUrls: ['./search-popup.component.scss']
})
export class SearchPopupComponent implements OnInit {

  constructor(
    public formBuilder: FormBuilder,
    private backend: DataBaseService,
    public router: Router) { }
  formGrup: FormGroup;
  categorys: Category[];
  selectedCategory: Category;

  ngOnInit(): void {
    this.list();
    this.formGrup = this.formBuilder.group({
      minTime: new FormControl(),
      maxTime: new FormControl(),
      searchText: new FormControl(),
    });
  }

  list()
  {
    this.categorys = this.backend.getCategory();
    this.selectedCategory = this.categorys[0];
  }

  search()
  {
    let forms = this.formGrup.getRawValue() as SearchDto;
    forms.Category = this.selectedCategory;
    this.backend.search(forms);
  }

  dropDownHandler(id: number)
  {
    this.selectedCategory = this.categorys[id];
    console.log(this.selectedCategory);
  }
}
