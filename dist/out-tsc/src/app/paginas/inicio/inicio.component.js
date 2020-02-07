import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let InicioComponent = class InicioComponent {
    constructor(pokemonService) {
        this.pokemonService = pokemonService;
        console.trace("Inicio component constructor");
        this.pokemon = {};
        this.pokemonId = 1;
    } // constructor
    ngOnInit() {
        console.trace("InicioComponent ngOnInit");
        this.pokemonService.getPokemon('pikachu').subscribe(data => {
            console.debug("peticion ok, %o", data);
            this.pokemon = data;
        }, error => console.warn(error), () => {
            console.trace("peticion completa");
        });
    } // ngOnInit
    getPokemon() {
        this.pokemonService.getById(this.pokemonId).subscribe(data => {
            this.pokemon = data;
        });
        //this.pokemon = this.pokemonService.getById(this.pokemonId);
    }
};
InicioComponent = tslib_1.__decorate([
    Component({
        selector: 'app-inicio',
        templateUrl: './inicio.component.html',
        styleUrls: ['./inicio.component.scss']
    })
], InicioComponent);
export { InicioComponent };
//# sourceMappingURL=inicio.component.js.map