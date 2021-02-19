/**
 * Representa la información de un usuario
 */
export class UserModel {
  /**
   * Identificador único de la autenticacion
   */
  uid?: string;
  /**
   * Correo electrónico del usuario
   */
  email?: string;
  /**
   * Nombre completo del usuario
   */
  nombres?: string;
  /**
   * Contraseña del usuario
   */
  password?: string;
  /**
   * Token de seguridad devuelto por el servicio de autenticación
   */
  secureToken?: string;
}
