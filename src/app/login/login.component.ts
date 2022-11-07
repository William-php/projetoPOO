import { LoginService } from './../services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  response: Subject<any> = new Subject
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.form = this.createForm();
  }

  createForm(): FormGroup {
    return this.fb.group({
      login: [, [Validators.required]],
      senha: [, [Validators.required, Validators.minLength(4)]]
    });
  }

  send(): void {
    console.log("teste");
    
    this.loginService.getLogin(this.form.value).subscribe( (v: any) => {
      
      this.response.next(v)
      console.log(v);
    })
  }

}
