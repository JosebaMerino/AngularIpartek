import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router, private usuarioService: UsuarioService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Si el usuario no se ha logeado false, si se ha logeado true.
    // Crear un provider o servicio para login de usuario
      const estaLogeado: boolean = this.usuarioService.estaLogeado();

      if(!estaLogeado) {
        this.router.navigate(['login']);
      }
      return estaLogeado;
  }

}
