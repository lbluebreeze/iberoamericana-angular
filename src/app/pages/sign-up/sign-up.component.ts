import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public user: UserModel = {};

  constructor() { }

  ngOnInit(): void {
    this.user.email = '';
    this.user.nombres = '';
    this.user.password = '';
  }

  submit(form: NgForm) {
    var formValue = form.form.value;

    this.user.email = formValue.email;
    this.user.nombres = formValue.nombres;
    this.user.password = formValue.password;
  }
}
