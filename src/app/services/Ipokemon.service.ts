import { Observable } from "rxjs";

export interface IPokemonService {
  /**
   * Recuperamos los datos en JSON de un Pokemon por su nombre
   * @param nombre : string nombre del pokemon a buscar
   * @see GET https://pokeapi.co/api/v2/pokemon/{id}/
   */
  getPokemon(nombre: string): Observable<any>;

  /**
   * 
   * @param id 
   * @see GET https://pokeapi.co/api/v2/ability/{id}/
   */
  getHabilidad(nombre: string): Observable<any>;
}
