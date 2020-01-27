import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.scss']
})
export class ArraysComponent implements OnInit {

  frutas : any;
  total: number

  constructor() {
    console.trace('ArraysComponent constructor');
    this.total = 0;
    this.frutas = [
      {
        'nombre': 'fresa', 'precio': 2.45
      },
      {
        'nombre': 'pera', 'precio': 3.50
      },
      {
        'nombre': 'manzana', 'precio': 1.99
      }
    ];
    for(let {precio} of this.frutas) {
      this.total += precio;
    }
  }

  ngOnInit() {
    console.trace('ArraysComponent ngOnInit');
  }

}
