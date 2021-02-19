import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { AppFacade } from 'src/app/facade/app.facade';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  /**
   * Clase encargada de interactuar con el estado de la aplicación
   */
  private facade: AppFacade;
  /**
   * Clase encargada de interactuar con el estado de la aplicación
   */
  private authService: AuthService;
  public name: string = "";
  private destroy$ = new Subject<boolean>();

  constructor(facade: AppFacade, public auth: AngularFireAuth, authService: AuthService) {
    this.facade = facade;
    this.authService = authService;
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }

  public submit(form: NgForm) {
    if (form.invalid) {

      return false;
    }

    this.authService.changeName(form.value.name);

    return true;
  }
}
