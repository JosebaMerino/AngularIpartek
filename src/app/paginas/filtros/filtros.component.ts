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

  constructor() {
    console.trace('FiltrosComponent constructor');
    this.coche = {
      nombre: 'Audi R8',
      color: 'blanco',
      isDiesel: false,
      precio: 100000.456
    };
    this.animales = ANIMALES;
  }// constructor

  ngOnInit() {
    console.trace('FiltrosComponent ngOnInit');
  } // ngOnInit

}// FiltrosComponent
