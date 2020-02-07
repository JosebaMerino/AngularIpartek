import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let PokemonService = class PokemonService {
    constructor(http) {
        this.http = http;
        console.trace("PokemonService constructor");
    }
    getPokemon(nombre) {
        debugger;
        const url = `https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`;
        console.trace("PokemonService" + url);
        return this.http.get(url);
    }
    getAll() {
        throw new Error("Method not implemented");
    }
    getById(id) {
        const url = "https://pokeapi.co/api/v2/pokemon/" + id + "/";
        console.trace("PokemonService" + url);
        return this.http.get(url);
    }
    getByName(nombre) {
        throw new Error("Method not implemented");
    }
};
PokemonService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], PokemonService);
export { PokemonService };
//# sourceMappingURL=pokemon.service.js.map