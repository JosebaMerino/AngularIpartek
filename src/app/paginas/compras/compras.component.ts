import { Component, OnInit } from '@angular/core';
import { Fruta } from 'src/app/model/frutas.model';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss']
})
export class ComprasComponent implements OnInit {

  frutaSeleccionada: Fruta;
  frutas: Array<Fruta>;

  constructor() {
    this.frutaSeleccionada = new Fruta();
    this.frutas = new Array<Fruta>();
  } // constructor

  ngOnInit() {
    this.frutas.push( new Fruta('Naranja'));
    this.frutas.push( new Fruta('Aguacate'));
    this.frutas.push( new Fruta('Sandia'));
  }

  recogerEvento($event) {
    console.debug('Soy componente padre y recibo evento %o', $event);
    this.frutaSeleccionada = $event;
  } // recogerEvento

}
