import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Fruta } from 'src/app/model/frutas.model';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  @Input() frutas: Array<Fruta>;
  @Output() pasameFrutaEvento = new EventEmitter(); // Parametro de salida

  frutaSeleccionada: Fruta;

  constructor() {

    this.frutaSeleccionada = new Fruta();
  }

  ngOnInit() {

  }

  seleccionarFruta(fruta) {
    console.debug('Fruta seleccionada %o', fruta);
    this.frutaSeleccionada = fruta;
  }// seleccionarFruta

  lanzar(event, fruta) {
    console.debug('Pasando evento al padre');
    this.frutaSeleccionada = fruta;
    this.pasameFrutaEvento.emit(fruta);
  }


}
