import { Component, OnInit, OnChanges } from '@angular/core';
import { DataBaseService } from 'src/app/services/data-base.service'
import { Section, Post, Category, User, MainSite } from 'src/app/shared/data/InterFaces/InterFaces';
import { faSearch, faUser, faPlus } from '@fortawesome/free-solid-svg-icons';
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { SortViewComponent } from '../../sort-view/sort-view.component';
import { SearchPopupComponent } from './search-popup/search-popup.component';
import { UserViewComponent } from '../../user-view/user-view.component';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnChanges {

  title = 'Angular Form Validation Tutorial';

  iconSearch = faSearch;
  iconUser = faUser;
  iconPlus = faPlus;
  isLoged = false;
  logo;
  categoryList: Category[];

  constructor(private backend: DataBaseService, private _modalService: BsModalService,) { }

  ngOnInit(): void {
    this.logo = "assets/logo.png"
    this.list();
    console.log(this.isLoged);

    this.backend.logedstatus.subscribe((value) => {
      this.isLoged = value;
      console.log(this.isLoged);
    });
    
  }

  userPopUp() {
    let addOrderDialog: BsModalRef;
    addOrderDialog = this._modalService.show(UserViewComponent, {
      class: "modal-lg",
      initialState: {
        isLoged: this.isLoged,
      },
    });
  }

  ngOnChanges() {
    this.checkIfLoged();
  }

  checkIfLoged() {
    this.isLoged = this.backend.isValid();
  }

  searchPopUp() {
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
