import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataBaseService } from '../services/data-base.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  constructor(public formBuilder: FormBuilder,private backend: DataBaseService,
    public router: Router) { }
    formGrup: FormGroup;   
    public isLoged = false; 

  ngOnInit(): void {
    this.formGrup = this.formBuilder.group({
      login: new FormControl(""),
      pass: new FormControl(""),
    });

    this.backend.logedstatus.subscribe((value) => {
      this.isLoged = value;
      console.log(this.isLoged);
    });
  }

  tryLogin()
  {
    let login = this.formGrup.getRawValue()["login"];
    let pass = this.formGrup.getRawValue()["pass"];
    sessionStorage.setItem("User", login);
    sessionStorage.setItem("Pass", pass);
    this.router.navigate(['AddArticleView']);
  }

  logOut()
  {
    this.backend.logOut();
  }
}
