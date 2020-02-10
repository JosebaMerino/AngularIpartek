import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/model/tarea';
import { TareasService } from 'src/app/services/tareas.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {

  tareas: Array<Tarea>;
  nuevaTarea: string;

  constructor(private servicioTarea: TareasService) {
    console.trace('TareasComponent constructor');
    this.tareas = []; // Inicializar el array
    this.nuevaTarea = '';
  } // constructor

  ngOnInit() {
    console.trace('TareasComponent ngOnInit');

    // llamar al service para obtener tareas
    this.cargarTareas();
  } // ngOnInit
  editarEstado(tarea: Tarea) {
    console.debug('Click %o', tarea);
    tarea.completada = !tarea.completada;

    this.servicioTarea.modificar(tarea).subscribe(
      () => {
        this.cargarTareas();
      }
    );
  }// editarEstado

  /**
   * Llama al servicio para cargar todas las tareas. Nos va ha servir para refrescar la lista
   */
  private cargarTareas(): void {
    console.trace('cargarTareas');
    this.servicioTarea.listar().subscribe(
      datos => {
        console.debug('Datos recibidos:');
        console.table(datos);
        this.tareas = datos;
      }
    );
  }// cargarTareas

  borrarTarea(tarea: Tarea) {
    console.debug(`Borrar tarea: %o`, tarea);

    const borrar = confirm('¿Desea borrar la tarea?');

    if(borrar){
      this.servicioTarea.eliminar(tarea.id).subscribe(
        () => {
          console.trace('Borrada tarea');
          this.cargarTareas();
        }
      );
    } else {
      console.trace('no se ha querido borrar la tarea');
    }
  } // borrarTarea

  crearTarea(nuevaTarea) {

    console.debug('Crear nueva tarea: %s', nuevaTarea);
    const tarea: Tarea = new Tarea();
    tarea.titulo = nuevaTarea;
    this.servicioTarea.crear(tarea).subscribe(
      dato => {
        console.trace('Tarea creada %o', dato);
        this.cargarTareas();
        this.nuevaTarea = '';
      }
    );
  }// crearTarea



}
