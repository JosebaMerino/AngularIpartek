import { Component, OnInit } from '@angular/core';
import { ANIMALES } from 'src/app/mocks';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {

  coche: any;
  animales: Array<any>;
  tipos: Set<string>;
  tipo : string;
  busqueda: string;

  constructor() {
    console.trace('FiltrosComponent constructor');
    this.coche = {
      nombre: 'Audi R8',
      color: 'blanco',
      isDiesel: false,
      precio: 100000.456
    };
    this.animales = ANIMALES;

    this.busqueda = '';

    this.tipo = 'todos';
    this.tipos = new Set<string>(this.animales.map((el) => el.Tipo ));
    console.debug(this.tipos);
  }// constructor

  ngOnInit() {
    console.trace('FiltrosComponent ngOnInit');

  } // ngOnInit

}// FiltrosComponent
