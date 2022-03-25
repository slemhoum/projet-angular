import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {DataService} from "./data.service";
import {UtilService} from "./util.service";

@Injectable({
  providedIn: 'root'
})
export class AppGuard implements CanActivate {

  constructor(private data: DataService, private util: UtilService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.data.curUser.id != 0) {
      return true;
    } else {
      this.util.navigateTo("login")
      return false;
    }
  }

}
