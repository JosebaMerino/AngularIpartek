import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArraysComponent } from './paginas/arrays/arrays.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { PokemonRestComponent } from './paginas/pokemon-rest/pokemon-rest.component';
/**
 * Definir las rutas de la app de angular
 * El path debe coincidir con [routerLink] del componente navabar
 */
const routes = [
    { path: '', component: InicioComponent },
    { path: 'arrays', component: ArraysComponent },
    { path: 'pokemon', component: PokemonRestComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map