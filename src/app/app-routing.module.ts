import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArraysComponent } from './paginas/arrays/arrays.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { PokemonRestComponent } from './paginas/pokemon-rest/pokemon-rest.component';
import { EstilosComponent } from './paginas/estilos/estilos.component';
import { JuegoComponent } from './paginas/juego/juego.component';
import { DirectivasComponent } from './paginas/directivas/directivas.component';
import { FiltrosComponent } from './paginas/filtros/filtros.component';
import { RecetasComponent } from './paginas/recetas/recetas.component';
import { Error404Component } from './paginas/error404/error404.component';
import { SaludarComponent } from './paginas/saludar/saludar.component';
import { ComparadorComponent } from './paginas/comparador/comparador.component';
import { PruebaComponent } from './componentes/prueba/prueba.component';
import { PruebasComponent } from './paginas/pruebas/pruebas.component';
import { TareasComponent } from './paginas/tareas/tareas.component';
import { PrivadoComponent } from './paginas/privado/privado.component';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './paginas/login/login.component';


/**
 * Definir las rutas de la app de angular
 * El path debe coincidir con [routerLink] del componente navabar
 */

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'arrays', component: ArraysComponent },
  { path: 'pokemon', component: PokemonRestComponent},
  { path: 'estilos', component: EstilosComponent},
  { path: 'juego', component: JuegoComponent},
  { path: 'directivas', component: DirectivasComponent },
  { path: 'filtros', component: FiltrosComponent },
  { path: 'recetas', component: RecetasComponent},
  // sirve para indicar que :pNombre es un parametro
  { path: 'saludar/:pNombre', component: SaludarComponent},
  { path: 'comparador', component: ComparadorComponent},
  { path: 'pruebas', component: PruebasComponent},
  { path: 'tareas', component: TareasComponent },
  // vamos ha proteger esta ruta con una guarda
  { path: 'privado', component: PrivadoComponent, canActivate: [LoginGuard]},
  { path: 'login', component: LoginComponent },
  { path: '**', component: Error404Component}
];

export const RUTAS = [
  {
    nombre: 'inicio',
    URL: '/',
    icono: 'fas fa-home'
  },
  {
    nombre: 'pruebas',
    URL: '/pruebas',
    icono: 'fas fa-wrench'
  },
  {
    nombre: 'productos',
    URL: '/productos',
    icono: 'fas fa-shopping-cart'
  },
  {
    nombre: 'juego',
    URL: '/juego',
    icono: 'fas fa-gamepad'
  },
  {
    nombre: 'arrays',
    URL: '/arrays',
    icono: 'fas fa-code'
  },
  {
    nombre: 'pokemon',
    URL: '/pokemon',
    icono: 'fas fa-frog'
  },
  {
    nombre: 'estilos',
    URL: '/estilos',
    icono: 'fab fa-sass'
  },
  {
    nombre: 'directivas',
    URL: '/directivas',
    icono: 'fas fa-code'
  },
  {
    nombre: 'filtros',
    URL: '/filtros',
    icono: 'fas fa-code'
  },
  {
    nombre: 'recetas',
    URL: '/recetas',
    icono: 'fas fa-utensils'
  },
  {
    nombre: 'tareas',
    URL: '/tareas',
    icono: 'far fa-check-square'
  },
  {
    nombre: 'privado',
    URL: '/privado',
    icono: 'fas fa-user-shield'
  },
  {
    nombre: 'Iniciar sesion',
    URL: '/login',
    icono: 'fas fa-user'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
