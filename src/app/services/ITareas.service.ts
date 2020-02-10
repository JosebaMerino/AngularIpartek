import { Observable } from "rxjs";
import { Tarea } from '../model/tarea';

export interface ITareasService {
  /**
   * Lista todas las tareas de la BD
   */
  listar(): Observable<Array<Tarea>>;

  /**
   * Pasado un ID, devuelve la tarea que tenga ese ID.
   * @param id de tarea que se desea buscar
   */
  detalle(id: number): Observable<Tarea>;

  /**
   * Crear nueva tarea
   * @param tarea tarea a dar de alta, sin id.
   * @returns un Observable con la tarea dada de alta, e id actualizado
   */
  crear(tarea: Tarea): Observable<Tarea>;

  /**
   * Modificar tarea en la BD
   * @param tarea tarea a modificar, con ID
   */
  modificar(tarea: Tarea): Observable<Tarea>;

  /**
   * Eliminar una tarea de la BD
   * @param id de la tarea a eleminar
   */
  eliminar(id: number): Observable<Tarea>;

}
