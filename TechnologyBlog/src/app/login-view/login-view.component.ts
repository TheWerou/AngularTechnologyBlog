import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataBaseService } from 'src/app/services/data-base.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent implements OnInit {

  constructor(public formBuilder: FormBuilder,private backend: DataBaseService,
    public router: Router) { }

    formGrup: FormGroup;    
  ngOnInit(): void {
    this.formGrup = this.formBuilder.group({
      login: new FormControl(""),
      pass: new FormControl(""),
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
}
