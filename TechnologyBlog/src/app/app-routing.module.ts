import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainBlogComponent } from './main-blog/main-blog.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { CategoryViewComponent } from './category-view/category-view.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { SortViewComponent } from './sort-view/sort-view.component';
import { LoginAuthGuard } from './shared/Auth/login-auth.guard';

const routes: Routes = [
  { path: '',   redirectTo: '/MainView', pathMatch: 'full' },
  { path: 'MainView', component:  MainBlogComponent},
  { path: 'CategoryView/:categoryId', component:  CategoryViewComponent},
  { path: 'ArticleView/:articleId', component:  ArticleViewComponent},
  { path: 'AddArticleView', component:  AddArticleComponent, canActivate: [LoginAuthGuard]},
  { path: 'SearchResoult', component:  SortViewComponent},
  { path: '**',  redirectTo: '/MainView' },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}),
    CommonModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
