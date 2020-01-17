import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss']
})
export class BotonComponent implements OnInit {

  numero: number;
  incremento: number;

  constructor() { 
    this.numero = 0;
    this.incremento = 1;
  }

  ngOnInit() {
  }

  pulsado  = () => {
    this.numero += this.incremento;
    if(this.numero == 0) {
      this.incremento = 1;
    }
    if(this.numero >= 10) {
      this.incremento = -1;
    }
  }

}
