import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private router: Router
  ) { }

  getLogin(loginForm: any): Observable<any> {
    this.router.navigate(['./main']);
    console.log("Formulário de login:", loginForm);
    return of(loginForm).pipe(take(1));

  }
}
