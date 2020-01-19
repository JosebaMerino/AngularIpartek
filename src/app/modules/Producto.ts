import { Categoria } from './Categoria';
import { Historico } from './Historico';

export class Producto {
  id: number;
  nombre: string;
  imagen: string;
  gluten: boolean;
  categoria: Categoria;
  historico: Historico[];

  constructor(id: number, nombre: string, imagen: string, gluten: boolean, categoria: Categoria, historico: Historico[]) {
    this.id = id;
    this.nombre = nombre;
    this.imagen = imagen;
    this.gluten = gluten;
    this.categoria = categoria;
    this.historico = historico;
  }
}
