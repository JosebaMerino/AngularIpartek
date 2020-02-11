import { Usuario } from '../model/usuario';

export interface IUsuarioService {
  estaLogeado(): boolean;

  /**
   * Comprueba que exista el usuario
   * @param nombre nombre del usuario
   * @param password contraseña del usuario
   * @returns Usuario con datos si existe, undefined si no existe
   */
  login(nombre: string, password: string): Usuario;

  cerrarSesion(idUsuario: number);
}
