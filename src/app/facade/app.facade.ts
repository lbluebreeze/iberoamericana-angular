import { Injectable, OnDestroy } from "@angular/core";
import { UserModel } from "../models/user.model";
import { AppState } from "../state/app.state";

/**
 * Clase encargada de interactuar con el estado de la aplicación
 */
@Injectable()
export class AppFacade {
  /**
   * Clase encargada de almacenar la información de la aplicación en un estado
   */
  private state: AppState;

  /**
   * Crea una nueva instancia de AppFacade
   * @param state Clase encargada de almacenar la información de la aplicación en un estado
   */
  constructor(state: AppState) {
    this.state = state;
  }
}
