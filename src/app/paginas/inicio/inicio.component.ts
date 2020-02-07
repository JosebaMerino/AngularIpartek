import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  titulo: string;
  numeroClicks: number;
  visible: boolean;
  claseSeleccionada: string;
  jugador: string;

  constructor() {
    console.trace('InicioComponent constructor');
    this.titulo = "BIENVENIDO";
    this.numeroClicks = 0;
    this.visible = false;
    this.claseSeleccionada = '';
    this.jugador = '';
  } // constructor

  ngOnInit() {
    console.trace('InicioComponent ngOnInit')
  } // ngOnInit

  contarClicks() {
    console.trace(this.numeroClicks);

    this.numeroClicks++;
  } // contarClicks

  decirAdios() {
    console.trace('decirAdios');
    this.visible = true;
  }// decirAdios

} // InicioComponent
