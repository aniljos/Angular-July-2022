import { AuthState } from '../ngrx-store/auth-reducer';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  private authState?: AuthState;
  constructor(private router: Router, private store: Store<{auth: AuthState}>) { 

    store
      .select(state => state.auth)
      .subscribe(auth => {
          this.authState = auth;
      })

  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    
    //const isAuthenticated = sessionStorage.getItem("isAuthenticated");
    
    const isAuthenticated = this.authState?.isAuthenticated;

    if(isAuthenticated && isAuthenticated === true){
      return true;
    }
    else{

      this.router.navigateByUrl("/login");
      return false;
    }
  }
}
