import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainBlogComponent } from './main-blog/main-blog.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { CategoryViewComponent } from './category-view/category-view.component';
import { AddArticleComponent } from './add-article/add-article.component';

const routes: Routes = [
  { path: '',   redirectTo: '/MainView', pathMatch: 'full' },
  { path: 'MainView', component:  MainBlogComponent},
  { path: 'CategoryView/:categoryId', component:  CategoryViewComponent},
  { path: 'ArticleView/:articleId', component:  ArticleViewComponent},
  { path: 'AddArticleView', component:  AddArticleComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
