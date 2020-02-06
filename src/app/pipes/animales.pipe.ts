import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'animalesFiltro'
})
export class AnimalesPipe implements PipeTransform {

  transform(datos: Array<any>, busqueda: string, tipoBusqueda: string): any {
    console.debug(datos);
    console.debug(busqueda);
    busqueda = (busqueda === undefined) ? undefined : busqueda.toUpperCase().trim();
    tipoBusqueda = (tipoBusqueda === undefined || tipoBusqueda === 'todos') ? undefined :  tipoBusqueda.toUpperCase();
    const resultado = datos.filter(
      (el) => {
        const nombre = el.Nombre.toUpperCase();
        const tipo = el.Tipo.toUpperCase();
        console.log(tipoBusqueda, busqueda);
        if (!tipoBusqueda && !busqueda) {
          return true;
        } else if (!busqueda) {
          return tipo === tipoBusqueda;
        } else if (!tipoBusqueda) {
          return nombre.includes(busqueda);
        } else {
          return nombre.includes(busqueda) && tipo === tipoBusqueda;
        }
      }
    );
    return resultado;
  }
}
