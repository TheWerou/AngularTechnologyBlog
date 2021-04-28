import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../services/data-base.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  constructor(private backend: DataBaseService) { }

  ngOnInit(): void {
  }

  logOut()
  {
    this.backend.logOut();
  }
}
