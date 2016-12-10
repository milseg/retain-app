import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {StoreHelper} from './store-helper';
import {Store} from '../store';
import {ApiService} from './api';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class AuthService implements CanActivate {
  JWT_KEY: string = 'retain_key';
  JWT: string = '';
  constructor(
    private router : Router,
    private storeHelper: StoreHelper,
    private store: Store,//for what?
    private apiService: ApiService
  ) {
    const token = window.localStorage.getItem(this.JWT_KEY);
    if(token) {
      this.setJwt(token);
    }
  }
  setJwt(jwt: string) {
    this.apiService.setHeaders({Authorization: `Bearer ${jwt}`});
    window.localStorage.setItem(this.JWT_KEY, jwt);
  }
  isAuthorized(): boolean {
    return Boolean(this.JWT);
  }
  //can we activate a route?
  canActivate(): boolean {
    const canActivate = this.isAuthorized();
    this.onCanActivate(canActivate);
    return canActivate;
  }

  onCanActivate(canActivate: boolean) {
    if(!canActivate) {
      this.router.navigate(['/auth']);
    }
  }

  authenticate(path, credits): Observable<any> {
    return this.apiService.post(`/${path}`, credits)
      .do((res: any) => this.setJwt(res.token))
      .do((res: any) => this.storeHelper.update('user', res.data))
      .map(res => res.data);
  }

  signout(){
    this.store.purge();
    window.localStorage.removeItem(this.JWT_KEY);
    this.router.navigate(['auth']);
  }
};
