import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.scss']
})
export class PruebasComponent implements OnInit {

  oculto: boolean;
  lista: Array<string>;
  numero: number;

  constructor() {
    console.trace('Hola desde PruebasComponent')
    this.oculto = true;
    this.lista = ['hola', 'lorem', 'pixel'];
    this.numero = 0;
  } // constructor

  ngOnInit() {
  }

  alternarOculto() {
    if(this.oculto) {
      this.oculto = false;
      this.empezarMostrar();
    } else {
      this.empezarOcultar();
    }
  }

  empezarMostrar(){
    if(this.numero < this.lista.length - 1 ){
      this.numero ++;
      setTimeout(() => { this.empezarMostrar() }, 700);
    } else {
      this.numero++;
    }
  }
  
  empezarOcultar(){
    debugger;
    if(this.numero > 1){
      this.numero --;
      setTimeout(() => { this.empezarOcultar() }, 700);
    } else {
      this.numero--;
      this.oculto = true;
    }
  }

}
