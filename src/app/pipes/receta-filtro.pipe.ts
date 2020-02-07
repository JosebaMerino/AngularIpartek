import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recetaFiltro'
})


export class RecetaFiltroPipe implements PipeTransform {

  /**
   * Dadas unas recetas la filtra si contienen un cocinero, un nombre o
   * un ingrediente que coincida con el criterio de busqueda. Si se selecciona
   * sin gluten devolvera todas las recetas que no tengan gluten
   * @param recetas que se desean filtrar
   * @param criterioBusqueda por el que se filtraran las recetas
   * @param sinGluten si se desea que todas las recetas sean sin gluten o no
   */
  transform(recetas: Array<any>, criterioBusqueda: string, sinGluten: boolean): any {
    if (!criterioBusqueda) {
      criterioBusqueda = '';
    }
    let resultado = new Array<any>();

    criterioBusqueda = criterioBusqueda.toUpperCase();

    if(sinGluten) {
      recetas = recetas.filter((el) => el.isGlutenFree);
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
