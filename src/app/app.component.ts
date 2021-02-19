import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Anime List';

  /**
   * Servicio de autenticación
   */
  private authService: AuthService;

  constructor(public auth: AngularFireAuth, authService: AuthService) {
    this.authService = authService;
  }

  public signOut() {
    this.authService.signOut();
  }
}
