# notas

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



