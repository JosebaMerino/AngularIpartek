import { Component, OnInit } from '@angular/core';
import { RECETAS } from 'src/app/mocks';


@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.scss']
})
export class RecetasComponent implements OnInit {

  recetas: Array<any>;
  receta: any;
  sinGluten: boolean;
  criterio: string;

  constructor() {
    console.trace('RecetasComponent constructor');
    this.recetas = RECETAS;
    this.receta = this.recetas[2];
    this.sinGluten = false;
    this.criterio = '';
  } // constructor

  ngOnInit() {
    console.trace('RecetasComponent ngOnInit');
  } // ngOnInit

  setReceta(receta : any) {
    console.trace('setReceta');
    this.receta = receta;
  }

}
