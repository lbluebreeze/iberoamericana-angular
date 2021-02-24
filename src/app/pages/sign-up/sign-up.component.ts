import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  private auth: AuthService;

  public user: UserModel = {};

  constructor(auth: AuthService) {
    this.auth = auth;
  }

  ngOnInit(): void {
    this.user.email = '';
    this.user.nombres = '';
    this.user.password = '';
  }

  submit(form: NgForm) {
    if (form.invalid) {

      return false;
    }

    var formValue = form.form.value;

    this.user.email = formValue.email;
    this.user.nombres = formValue.nombres;
    this.user.password = formValue.password;

    this.auth.signUp(this.user);

    return true;
  }
}
