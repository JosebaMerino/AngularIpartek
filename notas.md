# notas
## HOY

Que vamos a hacer?
Un nuevo proyecto.

Nos conectaremos al proyecto de pokemons de JAVA. Usando REST.

* [ ] Recuperar el proyecto de pokemon-rest
* [ ] Montar la base de datos
* [ ] Arrancar el servicio REST

* [ ] Crear aplicacion en Angular "pokemon-cliente-angular"
* [ ] Pagina inicial
    * [ ] listado con todos los pokemons
    * [ ] Filtrar por nombre de pokemon
    * [ ] Filtrar por habilidad (lista de checkbox)
    * [ ] Al hacer click en un pokemon sale a la derecha el detallez
* [ ] Crear, modificar y eliminar pokemons
* [ ] Conectar la aplicacion con el seevicio rest

(Opcional)
* [] Gestionar habilidades


Una aplicacion con angular, listar datos, algun filtro.


## Formularios reactivos

formulario: FormGroup --> De tipo FormGroup.
Para utilizar formularios reactivo se tiene que importar un modulo de Angular.

ReactiveForms  ->  de @angular/forms

Un input va ha ser un FormControl (input = FormControl)

Cada input del formulario tiene asignado un FormGroup.


``` html
<form [formGroup]="formulario" (ngSubmit)="enviar()">
  ...
  <input formControlName="nombre">
  ...
  <button [disabled]="formulario.invalid">
</form>
```


Para crear el formulario , se tiene que inyectar el contructor de formularios. Con el constructor de formularios se tiene que agregar los FormControl de cada input 



