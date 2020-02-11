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
  alerta: Alerta;

  constructor(private servicioTarea: TareasService) {
    console.trace('TareasComponent constructor');
    this.tareas = []; // Inicializar el array
    this.nuevaTarea = '';
    this.alerta = {
      mostrar: false,
      mensaje: ''
    };
  } // constructor

  ngOnInit() {
    console.trace('TareasComponent ngOnInit');

    // llamar al service para obtener tareas
    this.cargarTareas();
  } // ngOnInit
  editarEstado(tarea: Tarea) {
    console.debug('Click %o', tarea);

    this.servicioTarea.modificar(tarea).subscribe(
      (dato) => {
        this.cargarTareas();

        this.mostrarAlerta(`Editada tarea "${dato.titulo}" correctamente`);
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

          this.mostrarAlerta(`Se ha borrado la tarea con ID ${tarea.id} y titulo "${tarea.titulo}" correctamente`);
        }
      );
    } else {
      console.trace('no se ha querido borrar la tarea');
    }
  } // borrarTarea

  crearTarea(nuevaTarea) {

    console.debug('Crear nueva tarea: %s', nuevaTarea);
    if(nuevaTarea.length > 1){
      const tarea: Tarea = new Tarea();
      tarea.titulo = nuevaTarea;
      this.servicioTarea.crear(tarea).subscribe(
        dato => {
          console.trace('Tarea creada %o', dato);
          this.cargarTareas();

          this.mostrarAlerta(`Se ha creado la tarea "${this.nuevaTarea}" correctamente`);

          this.nuevaTarea = '';
        }
      );
    } else {
      this.mostrarAlerta('El nombre de la tarea es muy corto');
    }
  }// crearTarea

  mostrarAlerta(mensaje: string) {
    this.alerta.mensaje = mensaje;
    this.alerta.mostrar = true;

    setTimeout(() => {this.alerta.mostrar = false; }, this.alerta.mensaje.length * 500 );
  }
}

class Alerta {
  mostrar: boolean;
  mensaje: string;
}
