import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MyServiceService } from '../services/my-service.service';

@Injectable({
  providedIn: 'root'
})
export class MyGuardGuard implements CanActivate {

  

 private myservice : MyServiceService;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
    var a = this.myservice.checkPass()
    return true;
  }
  
}
