import { Component, OnInit } from '@angular/core';
import { DataBaseService } from 'src/app/services/data-base.service'
import { Section, Post, Category, User, MainSite } from 'src/app/shared/data/InterFaces/InterFaces';
import { faSearch, faUser, faPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  title = 'Angular Form Validation Tutorial';

  iconSearch = faSearch;
  iconUser = faUser;
  iconPlus = faPlus;

  categoryList: Category[];

  constructor(private backend: DataBaseService) {}

  ngOnInit(): void {
    this.list();
  }

  public list() {
    this.categoryList = this.backend.getCategory();
  }
}
