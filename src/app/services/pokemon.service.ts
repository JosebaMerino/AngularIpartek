import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService implements IPokemonService {

  constructor(private http: HttpClient) {
    console.trace("PokemonService constructor");
  }

  getPokemon(nombre: string): Observable<any> {
    const url = `https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`;
    console.trace("PokemonService" + url)
    return this.http.get(url);
  }

  getAll() {
    throw new Error("Method not implemented");
  }

  getById(id : number) {
    const url = "https://pokeapi.co/api/v2/pokemon/" + id + "/";
    console.trace("PokemonService" + url)
    return this.http.get(url);
  }

  getByName(nombre: string) {
    throw new Error("Method not implemented");
  }
}
