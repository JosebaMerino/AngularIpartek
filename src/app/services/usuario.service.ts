import { Injectable } from '@angular/core';
import { IUsuarioService } from './IUsuario.service';
import { Usuario } from '../model/usuario';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService implements IUsuarioService {
  private isLogged: boolean;
  private usuario: Usuario;

  constructor() {
    this.isLogged = false;
    this.usuario = undefined;
    console.trace('constructor UsuarioService');
  } // constructor

  estaLogeado(): boolean {
    return this.isLogged;
  }// estaLogeado

  login(nombre: string, password: string): Usuario {
    console.trace(`UsuarioService login, nombre ${nombre} password ${password}`);
    const NOMBRE = 'admin';
    const PASS = 'admin';

    let usuarioBuscar: Usuario; // si no entra en el if sera undefined

    if (NOMBRE === nombre && PASS === password) {
      // Crear usuario y rellenar datos.
      usuarioBuscar = new Usuario();
      usuarioBuscar.nombre = nombre;
      usuarioBuscar.password = password;
      usuarioBuscar.id = 99;
      this.isLogged = true; // marcar que esta logeado
    } else {
      this.isLogged = false;
    }

    return usuarioBuscar;
  } // login

  cerrarSesion(idUsuario: number) {
    this.isLogged = false;
  } // cerrarSesion
}
