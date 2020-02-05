import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'animalesFiltro'
})
export class AnimalesPipe implements PipeTransform {

  transform(datos: Array<any>, busqueda: string, tipoBusqueda: string): any {
    console.debug(datos);
    console.debug(busqueda);
    busqueda = (busqueda === undefined)? undefined : busqueda.toUpperCase();
    tipoBusqueda = (tipoBusqueda === undefined)? undefined :  tipoBusqueda.toUpperCase();
    let resultado = datos.filter(
      (el) => {
        const nombre = el.Nombre.toUpperCase();
        const tipo = el.Tipo.toUpperCase();
        console.log(tipoBusqueda, busqueda)
        if (tipoBusqueda === undefined && busqueda === undefined) {
          return true;
        } else if(busqueda === undefined) {
          return tipo === tipoBusqueda;
        } else if(tipoBusqueda === undefined) {
          return nombre.includes(busqueda);
        } else {
          return nombre.includes(busqueda) && tipo === tipoBusqueda;
        }
      }
    );
    return resultado;
  }

}
