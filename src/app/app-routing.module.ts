import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArraysComponent } from './paginas/arrays/arrays.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { PokemonRestComponent } from './paginas/pokemon-rest/pokemon-rest.component';
import { EstilosComponent } from './paginas/estilos/estilos.component';


/**
 * Definir las rutas de la app de angular
 * El path debe coincidir con [routerLink] del componente navabar
 */

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'arrays', component: ArraysComponent },
  { path: 'pokemon', component: PokemonRestComponent},
  { path: 'estilos', component: EstilosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
