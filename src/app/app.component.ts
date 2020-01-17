import { Component } from '@angular/core';

// componenete principal que se carga al arrancar la app


/*
selector:   nombre de la etiqueta para inyectar el componente en HTML
templateURL:  Vista del HTML
styleUrls:  Estilo para la vista formato SCSS
*/
@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // variable
  title = 'my-app';
}
