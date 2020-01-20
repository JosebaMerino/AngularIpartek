import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  pokemon: any;

  constructor(private pokemonService: PokemonService) {
    console.trace("Inicio component constructor");
    this.pokemon = {};
  } // constructor

  ngOnInit() {
    console.trace("InicioComponent ngOnInit");

    this.pokemonService.getPokemon().subscribe(
      data => {
        console.debug("peticion ok, %o", data);
        this.pokemon = data;
      },
      error => console.warn(error),
      () => {
        console.trace("peticion completa");
      }
    );
  } // ngOnInit

}
