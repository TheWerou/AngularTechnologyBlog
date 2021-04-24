import { Component, OnInit } from '@angular/core';
import { DataBaseService } from 'src/app/services/data-base.service'
import { Section, Post, Category, User, MainSite } from 'src/app/shared/data/InterFaces/InterFaces';
import { faSearch, faUser, faPlus } from '@fortawesome/free-solid-svg-icons';
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { SortViewComponent } from '../../sort-view/sort-view.component';
import { SearchPopupComponent } from './search-popup/search-popup.component';


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

  constructor(private backend: DataBaseService,private _modalService: BsModalService,) {}

  ngOnInit(): void {
    this.list();
  }

  searchPopUp()
  {
    let addOrderDialog: BsModalRef;
    addOrderDialog = this._modalService.show(SearchPopupComponent, {
      class: "modal-lg",
      initialState: {},
    });
  }

  public list() {
    this.categoryList = this.backend.getCategory();
  }
}
