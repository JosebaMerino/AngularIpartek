import { Color } from './color.model';

export class Fruta {
  id: number;
  nombre: string;
  imagen: string;
  precio: number;
  colores: Array<Color>;

  constructor() {
    this.id = 0;
    this.nombre = '';
    this.precio = 0;
    this.colores = new Array<Color>();
    this.imagen = 'assets/images/frutas.jpg';
  }
}
