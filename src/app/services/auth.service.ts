import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AppFacade } from '../facade/app.facade';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /**
   * Clase encargada de interactuar con el estado de la aplicación
   */
  private facade: AppFacade;

  constructor(public auth: AngularFireAuth, facade: AppFacade, public router: Router) {
    this.facade = facade;
  }

  public login(user: UserModel) {
    if ((user.email || '').trim() && (user.password || '').trim()) {
      this.auth.signInWithEmailAndPassword(user.email || '', user.password || '')
        .then((userCredential) => {
          this.router.navigate(['/profile']);
        })
        .catch((error) => alert(error.message));
    }
  }

  public signUp(user: UserModel) {
    if ((user.email || '').trim() && (user.password || '').trim()) {
      this.auth.createUserWithEmailAndPassword(user.email || '', user.password || '')
        .then((userCredential) => {
          userCredential.user?.updateProfile({
            displayName: user.nombres
          });
          this.router.navigate(['/profile']);
        })
        .catch((error) => alert(error.message));
    }
  }

  public signOut() {
    this.auth.signOut();
    this.router.navigate(['/login']);
  }

  public changeName(name: string) {
    if (name) {
      this.auth.user.subscribe((user) => {
        user?.updateProfile({
          displayName: name
        })
      });
    }
  }
}
