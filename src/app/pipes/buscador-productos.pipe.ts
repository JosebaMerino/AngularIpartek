import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscadorProductos'
})
export class BuscadorProductosPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
