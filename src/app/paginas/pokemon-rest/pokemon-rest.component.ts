import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-rest',
  templateUrl: './pokemon-rest.component.html',
  styleUrls: ['./pokemon-rest.component.scss']
})
export class PokemonRestComponent implements OnInit {

  pokemon: Pokemon;

  constructor(private pokemonService: PokemonService) {
    console.trace('constructor PokemonRestComponent');
    this.pokemon = new Pokemon();
    console.debug(this.pokemon);
  }

  ngOnInit() {
    console.trace('ngOnInit PokemonRestComponent');
    // llamadas a los servicios

    // a un observable nos tenemos que suscribir
    // cuando llamamos a un Observable tenemos 3 posible metodos
    // solo 1 es obligatorio.

    this.pokemonService.getPokemon(this.pokemon.nombre).subscribe(
      data => {
        console.debug('peticion correcta data %o', data);
      },
      error => {
        console.warn('peticion erronea data %o', error)
      },
      () => {
        console.trace('esto se hace siempre')
      }
    );

  }

}
