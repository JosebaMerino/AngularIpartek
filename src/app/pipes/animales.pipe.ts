import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'animalesFiltro'
})
export class AnimalesPipe implements PipeTransform {

  transform(datos: Array<any>, busqueda: string): any {
    console.debug(datos);
    console.debug(busqueda);
    busqueda = busqueda.toUpperCase();
    let resultado = datos.filter(
      (el) => {
        return el.Nombre.toUpperCase().includes(busqueda);
      }
    );
    return resultado;
  }

}
