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
  nombrePokemon: string;
  mensaje: string;

  constructor(private pokemonService: PokemonService) {
    console.trace('constructor PokemonRestComponent');
    this.pokemon = new Pokemon();
    console.debug(this.pokemon);
    this.mensaje = 'Hola';
    this.nombrePokemon = 'raichu'
  }

  ngOnInit() {
    console.trace('ngOnInit PokemonRestComponent');
    // llamadas a los servicios

    // a un observable nos tenemos que suscribir
    // cuando llamamos a un Observable tenemos 3 posible metodos
    // solo 1 es obligatorio.

    this.getPokemon();
  }

  getPokemon(){
    this.pokemonService.getPokemon(this.nombrePokemon).subscribe(
      data => {
        console.debug('peticion correcta data %o', data);
        this.pokemon.id = data.id;
        this.pokemon.nombre = data.name;
        this.pokemon.imagen = data.sprites.front_default;

        this.pokemon.habilidades = [];
        for (const ability of data.abilities) {
          this.getHabilidad(ability.ability.name);
        }

        //this.getHabilidad(data.abilities[0].ability.name);
      },
      error => {
        console.warn('peticion erronea data %o', error);
        this.pokemon.id = error.status;
        this.pokemon.nombre = error.statusText;
        this.pokemon.imagen = 'https://www.alfabetajuega.com/wp-content/uploads/2019/08/fanart-pokeball-interior-e1566472645874.jpg';
      },
      () => {
        console.trace('esto se hace siempre');
      }
    );
  }

  getHabilidad(nombre: string) {
    this.pokemonService.getHabilidad(nombre).subscribe(
      data => {
        console.debug(data);
        const habilidad = data.names.find( el => {
          return el.language.name === 'es';
        });
        this.pokemon.habilidades.push(habilidad.name);
      },
      error => {
        console.debug(error);
        return '';
      }
    )
  }

}
