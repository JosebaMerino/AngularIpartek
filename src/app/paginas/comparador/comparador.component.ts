import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comparador',
  templateUrl: './comparador.component.html',
  styleUrls: ['./comparador.component.scss']
})
export class ComparadorComponent implements OnInit {

  coches: Array<any>;
  c1: any;
  c2: any;

  constructor() {
    this.coches = [
      {
        nombre: 'chincochento',
        precio: 3000
      },
      {
        nombre: 'Renault megan',
        precio: 3500
      },
      {
        nombre: 'Ferrari',
        precio: 350000
      }
    ];
    this.c1 = this.coches[0];
    this.c2 = this.coches[1];
  }

  ngOnInit() {
  }

  seleccionar(coche) {
    this.c2 = this.c1;
    this.c1 = coche;
  }

}
