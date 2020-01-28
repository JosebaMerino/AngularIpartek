import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.scss']
})
export class ArraysComponent implements OnInit {

  frutas : any;
  total: number;
  totalDescuento: number;
  aSoloNombres: Array<string>;
  frutasConDescuento: [];
  frutasAmarillas: Array<string>;
  precioFrutasAmarillas: number;
  primeraVerde: any;
  todosColores: Array<string>;

  constructor() {
    console.trace('ArraysComponent constructor');
    this.total = 0;
    this.totalDescuento = 0;
    this.aSoloNombres = [];
    this.frutasConDescuento = [];
    this.frutasAmarillas = [];
    this.precioFrutasAmarillas = 0;
    this.primeraVerde = {};
    this.todosColores = [];
    this.frutas = [
      {
        'nombre': 'fresa', 'precio': 2.45, 'descuento': 0, 'colores': ['roja']
      },
      {
        'nombre': 'pera', 'precio': 3.50, 'descuento': 10, 'colores': ['amarilla', 'verde']
      },
      {
        'nombre': 'manzana', 'precio': 1.99, 'descuento': 50, 'colores': ['amarilla', 'verde', 'roja']
      }
    ];

  }

  ngOnInit() {
    console.trace('ArraysComponent ngOnInit');

    /* Modo extendido para poder depurar
    this.total = this.frutas.map( el => {
      console.debug(el);
      return el.precio;
    }).
    reduce((previous, current)=> {
      return previous + current;
    });
    */ 

    this.aSoloNombres = this.frutas.map(el => el.nombre);

    this.frutasConDescuento = this.frutas.filter( el => el.descuento > 0).map(el => el.nombre);

    // Modo reducido
    this.total = this.frutas.map( el => el.precio ).reduce( (p, c) => p + c );

    this.totalDescuento = this.frutas.reduce((p, c) => (p + this.precioConDescuento(c.precio, c.descuento)), 0)


    this.frutasAmarillas = this.frutas.filter((fruta => {
      return fruta.colores.find(color => color === 'amarilla')
    })).map(el => el.nombre)

    this.precioFrutasAmarillas = this.frutas.filter((fruta) => fruta.colores.find((color => color === 'amarilla'))).reduce((p, c) => p + this.precioConDescuento(c.precio, c.descuento), 0);

    
    this.primeraVerde = this.frutas.find(fruta => fruta.colores.find(color => color === 'verde'))
    console.log("Precio total: ", this.total);

    this.todosColores = this.frutas.reduce((p, c) => p.concat(c.colores.filter( color => !p.includes(color))), [])
  }

  precioConDescuento(precio, descuento) {
    return precio - ((precio * descuento)/ 100);
  }

}
