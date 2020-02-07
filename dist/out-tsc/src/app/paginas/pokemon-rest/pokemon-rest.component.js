import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';
let PokemonRestComponent = class PokemonRestComponent {
    constructor(pokemonService) {
        this.pokemonService = pokemonService;
        console.trace('constructor PokemonRestComponent');
        this.pokemon = new Pokemon();
        console.debug(this.pokemon);
        this.mensaje = 'Hola';
        this.nombrePokemon = 'raichu';
    }
    ngOnInit() {
        console.trace('ngOnInit PokemonRestComponent');
        // llamadas a los servicios
        // a un observable nos tenemos que suscribir
        // cuando llamamos a un Observable tenemos 3 posible metodos
        // solo 1 es obligatorio.
        this.getPokemon();
    }
    getPokemon() {
        this.pokemonService.getPokemon(this.nombrePokemon).subscribe(data => {
            console.debug('peticion correcta data %o', data);
            this.pokemon.id = data.id;
            this.pokemon.nombre = data.name;
            this.pokemon.imagen = data.sprites.front_default;
        }, error => {
            console.warn('peticion erronea data %o', error);
            this.pokemon.id = error.status;
            this.pokemon.nombre = error.statusText;
            this.pokemon.imagen = 'https://www.alfabetajuega.com/wp-content/uploads/2019/08/fanart-pokeball-interior-e1566472645874.jpg';
        }, () => {
            console.trace('esto se hace siempre');
        });
    }
};
PokemonRestComponent = tslib_1.__decorate([
    Component({
        selector: 'app-pokemon-rest',
        templateUrl: './pokemon-rest.component.html',
        styleUrls: ['./pokemon-rest.component.scss']
    })
], PokemonRestComponent);
export { PokemonRestComponent };
//# sourceMappingURL=pokemon-rest.component.js.map