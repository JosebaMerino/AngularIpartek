import { Component, OnInit } from '@angular/core';
import { RUTAS } from 'src/app/app-routing.module';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

const TIME_SHOW = 10;


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isNavbarCollapsed: boolean;
  numero: number;
  rutas: Array<any>;

  constructor(public usuarioService: UsuarioService, private router: Router) {
    console.trace('NavbarComponent constructor');
    this.rutas = RUTAS;
    this.isNavbarCollapsed = true;
    this.numero = 0;
  }// constructor

  ngOnInit() {
  }

  alternarOculto() {
    if(this.isNavbarCollapsed) {
      this.isNavbarCollapsed = false;
      this.empezarMostrar();
    } else {
      this.empezarOcultar();
    }
  }

  empezarMostrar(){
    if(this.numero < this.rutas.length - 1 ){
      this.numero ++;
      setTimeout(() => { this.empezarMostrar() }, TIME_SHOW);
    } else {
      this.numero++;
    }
  }

  empezarOcultar(){
    if(this.numero > 1){
      this.numero --;
      setTimeout(() => { this.empezarOcultar() }, TIME_SHOW);
    } else {
      this.numero--;
      this.isNavbarCollapsed = true;
    }
  }

  salir() {
    console.trace('NavbarComponent click boton cerrar sesion');

    const mensaje = '¿Estas seguro de que quieres salir?';
    this.usuarioService.cerrarSesion(99);
    this.router.navigate(['login']);
  }
}
