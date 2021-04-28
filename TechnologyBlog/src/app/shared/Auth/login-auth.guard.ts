import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataBaseService } from 'src/app/services/data-base.service';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthGuard implements CanActivate {

  constructor(private router: Router, private backend: DataBaseService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.backend.isValid()) {
      return true;
    }
    else {
      // not logged in so redirect to login page with the return url
      this.router.navigate(['Auth/Login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
  }

}
