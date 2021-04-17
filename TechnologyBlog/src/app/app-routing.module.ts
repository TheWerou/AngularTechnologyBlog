import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainBlogComponent } from './main-blog/main-blog.component';
import { ArticleViewComponent } from './article-view/article-view.component';

const routes: Routes = [
  { path: '',   redirectTo: '/MainView', pathMatch: 'full' },
  { path: 'MainView', component:  MainBlogComponent},
  { path: 'ArticleView', component:  ArticleViewComponent},
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
