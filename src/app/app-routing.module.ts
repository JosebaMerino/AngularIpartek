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
  { path: 'recetas', component: RecetasComponent}
];

export const RUTAS = [
  {
    nombre: 'inicio',
    URL: '/',
    icono: 'fas fa-home'
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
