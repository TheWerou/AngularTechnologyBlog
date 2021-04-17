import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-blog',
  templateUrl: './main-blog.component.html',
  styleUrls: ['./main-blog.component.scss']
})
export class MainBlogComponent implements OnInit {
  public imagePath: string
  constructor() { }

  ngOnInit(): void {
    this.imagePath = "assets/placeholder.jpg";
  }

}
