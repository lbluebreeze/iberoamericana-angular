import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private auth: AuthService;

  public user: UserModel = {};

  constructor(auth: AuthService) {
    this.auth = auth;
  }

  ngOnInit(): void {
    this.user.email = 'juan_p14@hotmail.com';
    this.user.nombres = 'Juan Eduardo Padilla González';
    this.user.password = 'swordfish';
  }

  submit(form: NgForm) {
    if (form.invalid) {

      return false;
    }

    var formValue = form.form.value;

    this.user.email = formValue.email;
    this.user.nombres = formValue.nombres;
    this.user.password = formValue.password;

    this.auth.login(this.user);

    return true;
  }
}
