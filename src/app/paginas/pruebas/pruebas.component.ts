import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.scss']
})
export class PruebasComponent implements OnInit {

  constructor() {
    console.trace('Hola desde PruebasComponent')
  } // constructor

  ngOnInit() {
  }

}
