import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainBlogComponent } from './main-blog/main-blog.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { ArticleViewComponent } from './article-view/article-view.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { CategoryViewComponent } from './category-view/category-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FotterComponent } from './shared/fotter/fotter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SortViewComponent } from './sort-view/sort-view.component';
import { SearchPopupComponent } from './shared/nav-bar/search-popup/search-popup.component';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { UserViewComponent } from './user-view/user-view.component';



@NgModule({
  declarations: [
    AppComponent,
    MainBlogComponent,
    NavBarComponent,
    ArticleViewComponent,
    AddArticleComponent,
    CategoryViewComponent,
    FotterComponent,
    SortViewComponent,
    SearchPopupComponent,
    UserViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
