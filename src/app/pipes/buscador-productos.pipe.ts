import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from 'querystring';

@Pipe({
  name: 'buscadorProductos'
})
export class BuscadorProductosPipe implements PipeTransform {

  transform(recetas: Array<any>, criterioBusqueda: string, sinGluten: boolean): any {
    if (!criterioBusqueda) {
      criterioBusqueda = '';
    }
    let resultado = new Array<any>();

    criterioBusqueda = criterioBusqueda.toUpperCase();

    if(sinGluten) {
      recetas = recetas.filter((el)=> el.isGlutenFree);
    }

    resultado = (recetas.filter((el) => {
      let valido = false;
      valido = valido || el.nombre.toUpperCase().includes(criterioBusqueda);
      valido = valido || el.cocinero.toUpperCase().includes(criterioBusqueda);
      valido = valido || el.ingredientes.some(el => el.toUpperCase().includes(criterioBusqueda));
      return valido;
    }));


    return resultado;
  }

}
