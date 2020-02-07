# Build y Subir a github pages
[GUIA](https://angular.io/guide/deployment#deploy-to-github-pages)
1. ``` ng build --prod --output-path docs --base-href /AngularIpartek/```
2. Ir a la carpeta ``` docs ```, duplicar el fichero ``` index.html ``` y cambiarle el nombre a ``` 404.html ```.
3. Subir los cambios y listo.

```
  Si no se tiene activado para que github genere la pagina, ir a ajustes del proyecto, despues a la seccion de 'Github Pages' y elegir la opcion de usar la carpeta docs
```

# Ejercicio extra si eso

Sacar u listado y cuando se hace click ir a otro componente pasando el ID y a traves del ID mostramos el detalle

# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
