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

  constructor(private backend: DataBaseService) { }
  iconSearch = faSearch;
  iconUser = faUser;
  iconPlus = faPlus;

  categoryList: Category[];

  ngOnInit(): void {
    this.list();
  }

  public list() {
    this.categoryList = this.backend.getCategory();
  }
}
