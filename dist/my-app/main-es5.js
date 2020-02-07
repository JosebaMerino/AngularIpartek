function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<head>\r\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css\">\r\n</head>\r\n<app-navbar></app-navbar>\r\n<main class=\"container pt-2\">\r\n  <!-- Es un MODULO de angular para el sistema de rutas o navegacion -->\r\n  <router-outlet></router-outlet>\r\n\r\n</main>\r\n<footer class=\"d-flex\">\r\n  <div class=\"contenedor d-flex\">\r\n      <div>Autor: {{ globales.nombre }}</div>\r\n      <div>\r\n        <a href=\"{{ globales.github }}\" target=\"_blank\"><i class=\"fab fa-github\"></i></a>\r\n      </div>\r\n      <div>\r\n        Version: {{ globales.version }}\r\n      </div>\r\n  </div>\r\n</footer>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/boton/boton.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/boton/boton.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesBotonBotonComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button (click) = \"pulsado()\" class=\"btn btn-primary\" >{{ (incremento == 1)? 'Suma' : 'Resta' }} {{ numero }}</button>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/navbar/navbar.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/navbar/navbar.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">NavBar</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n        aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li *ngFor=\"let ruta of rutas\" class=\"nav-item\">\n                <a [routerLink]=\"ruta.URL\" routerLinkActive=\"active\" class=\"nav-link\">\n                  <i [class]=\"ruta.icono\"></i>\n                  {{ ruta.nombre | titlecase}}\n                </a>\n            </li>\n        </ul>\n    </div>\n</nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/prueba/prueba.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/prueba/prueba.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesPruebaPruebaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>prueba works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/arrays/arrays.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/arrays/arrays.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPaginasArraysArraysComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2> Jugando con arrays </h2>\n\n<div class=\"row\">\n    <div class=\"col\">\n        <pre style=\"background-color: black; color: white\">{{ frutas | json }}</pre>\n    </div>\n    <div class=\"col\">\n        <p>Precio total: <b> {{ total }} </b> </p>\n        <p>Precio total con descuento: <b> {{ totalDescuento }} </b> </p>\n        <p>Nombre de los productos: <b> {{ aSoloNombres }} </b></p>\n        <p>Frutas con descuento: <b> {{ frutasConDescuento }} </b></p>\n        <p>Nombre frutas amarillas: <b> {{ frutasAmarillas }} </b></p>\n        <p>Precio total de las frutas amarillas: <b> {{ precioFrutasAmarillas }} </b></p>\n        <p>Buscar primera fruta verde: <b> {{ primeraVerde.nombre }} </b></p>\n        <p>Array de colores: <b> {{ todosColores | json }} </b></p>\n    </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/directivas/directivas.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/directivas/directivas.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPaginasDirectivasDirectivasComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2>Directivas</h2>\n<a href=\"https://www.google.com/search?client=firefox-b-d&q=angular+io+custom+directives\" target=\"_blank\"></a>\n<p>Hay tres tipo de directivas en Angular:</p>\n<dl>\n  <dt>Componentes</dt>\n  <dd>son directivas con plantilla HTML</dd>\n  <dt>Estructurales</dt>\n  <dd>cambian el DOM añadiendo o removiendo elementos, por ejemplo *ngIf</dd>\n  <dt>Attribute directive</dt>\n  <dd>cambian la apariencia de un elemento del DOM, por ejemplo ngStyle</dd>\n\n</dl>\n<p appHello= \"black\"> En esta etiqueta estamos usando nuestra directiva <code> AppHello</code></p>\n<br>\n<br>\n<br>\n<div [appHello]=\"'blue'\" > HOLA, usando corchetes espera una variable</div>\n\n\n<div>\n  <p style=\"color: blue;\" appSubrayar=\"red\">Lorem ipsum dolor sit.</p>\n  <p [appSubrayar]=\"'blue'\">Necessitatibus accusamus mollitia corporis.</p>\n  <p [appSubrayar]= \"colorSeleccionado\">Nesciunt laborum minima omnis.</p>\n\n  <div class=\"border\">\n    <input [(ngModel)]=\"colorSeleccionado\" type=\"color\" name=\"\" id=\"\">\n    <br>\n    <input [(ngModel)]=\"colorSeleccionado\" type=\"radio\" value=\"red\" id=\"rojo\"> <label for=\"rojo\">Rojo</label>\n    <br>\n    <input [(ngModel)]=\"colorSeleccionado\" type=\"radio\" value=\"green\" id=\"verde\"> <label for=\"verde\">Verde</label>\n    <br>\n    <input [(ngModel)]=\"colorSeleccionado\" type=\"radio\" value=\"blue\" id=\"azul\"> <label for=\"azul\">Azul</label>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/estilos/estilos.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/estilos/estilos.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPaginasEstilosEstilosComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1> SASS </h1>\n<p>SASS es un precompilador de CSS y soporta dos formatos. <code>.sass</code> y <code>.scss</code> y nos genera un <code>.css</code></p>\n\n<p>Vamos a usar el formato <code>.scss</code> porque es el mas sencillo para aprender puesto que soporta que escribamos en <code>css</code></p>\n<p>Existen otros precompiladores como <code>LESS</code> y <code>STYLUS</code></p>\n<p>Documentacion oficial <a href=\"https://sass-lang.com/\" target=\"_blank\"> SASS</a></p>\n\n\n<span class=\"borde10\">10</span>\n<span class=\"borde50\">50</span>\n\n\n<button class=\"boton-verde\" > BOTON VERDE</button>\n<button class=\"boton-rojo\" > CANCELAR</button>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/filtros/filtros.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/filtros/filtros.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPaginasFiltrosFiltrosComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2>{{'Pipes o Filtros' | uppercase}}</h2>\nDocumentacion>api\n<h3>Ejemplos de filtros de Angular</h3>\n<a href=\"http://\" target=\"_blank\">API de filtros</a>\n<pre class=\"code\">{{coche | json}}</pre>\n<p>{{ coche.nombre | uppercase}}</p>\n<p>{{ coche.color | lowercase}}</p>\n<p> {{ coche.precio | currency : 'EUR' : '' }} &euro;  </p>\n\n<p> {{ coche.nombre | slice : 0 : 5}} </p>\n<p> {{ coche.nombre | slice : 5 }} </p>\n\n<h3> Filtrado listas</h3>\n\n<input type=\"text\" [(ngModel)]=\"busqueda\">\n<select [(ngModel)]=\"tipo\" name=\"tipo\" id=\"tipo\">\n  <option value=\"todos\"> TODOS</option>\n  <option *ngFor=\"let tipoEl of tipos\" value=\"{{tipoEl}}\">{{tipoEl}}</option>\n</select>\n<ul class=\"list-group\">\n\n  <li *ngFor=\"let animal of animales | animalesFiltro : busqueda : tipo\" class=\"list-group-item\">\n    <img class=\"circle\" src=\"{{animal.Imagen}}\" alt=\"\">\n    <div>\n      <p class=\"nombre\"> {{animal.Nombre | titlecase}} </p>\n      <p class=\"observacion\"> {{animal.Observacion }} </p>\n    </div>\n  </li>\n</ul>\n\n<h3>Custom filters</h3>\n<a href=\"https://angular.io/guide/pipes\" target=\"_blank\">Documentacion oficial</a>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/inicio/inicio.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/inicio/inicio.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPaginasInicioInicioComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n<h2> {{ titulo }}  </h2>\r\n\r\n<p> Numero clicks {{ numeroClicks }}</p>\r\n\r\n<button class=\"btn btn-primary\" (click)= \"contarClicks()\"> CONTA</button>\r\n<br>\r\n<p>Ejemplo de propiedad, siempre con [] y las variables sin llaves</p>\r\n<p> La propiedad <code>hidden</code> es de Angular y tambien podriamos haber usado <code>ngIf</code> </p>\r\n<p [hidden]=\"!visible\">\r\n  ADIOS con hidden\r\n</p>\r\n<p *ngIf=\"visible\">\r\n  ADIOS ngIf\r\n</p>\r\n<button class=\"btn btn-primary\" (click)=\"decirAdios()\"> ADIOS</button>\r\n\r\n<hr>\r\n<p> Podemos declarar propiedades al vuelo , sin tener que definirlas en el Componente. </p>\r\n<div [class]=\"claseSeleccionada\"> COLOR que cambia al pulsar botones</div>\r\n\r\n<button (click) = \"claseSeleccionada = 'rojo'\" > ROJO</button>\r\n<button (click) = \"claseSeleccionada = 'verde'\" > VERDE</button>\r\n\r\n<p>Para usar banana in a box recordar importar el modulo de <code>FormsModule</code></p>\r\n\r\n<label > Nombre: {{jugador}}</label>\r\n<br>\r\n<input type=\"text\" [(ngModel)] = \"jugador\">\r\n\r\n/*\r\n\r\n*/\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/juego/juego.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/juego/juego.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPaginasJuegoJuegoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-xs-12 col-md-6\">\n    <div class=\"d-flex align-items-center\">\n      <div class=\"mr-2 flex-shrink-1 \">Tu nombre</div>\n      <div class=\"mr-2  flex-grow-1\">\n        <input [disabled]=\"!puedeJugar\" class=\"form-control\" type=\"text\" [(ngModel)] = \"jugador\"></div>\n      <div class=\"flex-shrink-1\"><button class=\"btn btn-primary\" [disabled]=\"!puedeJugar\" (click)= \"jugar()\"> JUGAR </button></div>\n    </div>\n\n    <div class=\"mt-3\">\n      <div class=\"marcador text-center\">{{puntos}}</div>\n      <button class=\"btn btn-primary btn-block btn-contar\" (click)=\"contar()\" [disabled] = \"!enJuego\">Contar</button>\n    </div>\n  </div>\n  <div class=\"col-xs-12 col-md-6\">\n    <h5 class=\"text-center\"> TOP mejores jugadores</h5>\n    <ul class=\"list-group\" >\n      <li class=\"list-group-item\" *ngFor=\"let jugador of mostrarJugadores()\">\n        <b>{{jugador[1]}} </b> {{jugador[0]}}\n      </li>\n    </ul>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/pokemon-rest/pokemon-rest.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/pokemon-rest/pokemon-rest.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPaginasPokemonRestPokemonRestComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"mensaje\" class=\"alert alert-primary\" role=\"alert\"> </div>\n<div class=\"d-flex\">\n    <div class=\"\">\n        <div class=\"card\" style=\"width: 18rem;\">\n            <input (change)=\"getPokemon()\" class=\"form-control\" type=\"text\" [(ngModel)]=\"nombrePokemon\">\n            <button class=\"btn btn-primary\" (click)=\"getPokemon()\"> GET POKEMON</button>\n            <img class=\"card-img-top\" src='{{ pokemon.imagen }} ' alt=\"Card image cap\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">{{ pokemon.id }}º {{ pokemon.nombre }}</h5>\n                <p class=\"card-text d-none\">\n                    Some quick example text to build on the card title and make up the bulk of\n                    the card's content.</p>\n                    <span *ngFor=\"let habilidad of pokemon.habilidades\" class=\"badge badge-secondary ml-1\">{{ habilidad }}</span>\n            </div>\n        </div> <!-- .card -->\n    </div> <!-- .col -->\n    <div class=\"flex-grow-1 align-items-center d-flex\" style=\"background-color: black;max-width: 50vw;\">\n        <pre style=\"color: white; background-color: black;\">{{ pokemon | json}}</pre>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/recetas/recetas.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/recetas/recetas.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPaginasRecetasRecetasComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"row \">\n    <div class=\"col\">\n      <a href=\"#\">Cocinar nueva receta</a>\n    </div>\n    <div class=\"col buscador\">\n      <div>\n        <b>\n          Recetas sin gluten\n        </b>\n        <input [(ngModel)]=\"sinGluten\" type=\"checkbox\" name=\"\" id=\"\">\n      </div>\n      <div class=\"input-group\">\n        <input [(ngModel)]=\"criterio\" class=\"form-control\" type=\"text\" placeholder=\"Busca receta por nombre, cocinero o ingredientes\">\n        <div class=\"input-group-append\">\n          <button class=\"btn\"> <i class=\"fas fa-search\"></i></button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row mt-4\">\n    <div class=\"col-4\">\n      <h4> Recetario </h4>\n      <ul class=\"list-group\">\n        <li *ngFor=\"let recetaEl of recetas | recetaFiltro : criterio : sinGluten\" class=\"list-group-item item-receta {{ recetaEl.nombre === receta.nombre? 'active' : '' }}\" (click)=\"setReceta(recetaEl)\" >\n          <div class=\"receta\">\n            <div>\n              {{ recetaEl.nombre }}\n            </div>\n            <div class=\"text-muted\">\n              <i>\n                {{ recetaEl.cocinero }}\n              </i>\n            </div>\n          </div> <!-- div.receta -->\n          <div [hidden]=\"recetaEl.isGlutenFree\" class=\"gluten\">\n            <i class=\"fas fa-exclamation-triangle\"></i>\n          </div>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col\">\n\n<div class=\"container receta-detalle\">\n  <div class=\"row titulo\">\n    <h4> {{ receta.nombre | titlecase }} </h4>\n  </div>\n  <div class=\"row\">\n    <div class=\"receta-titulo col-6 p-2\">\n      <span class=\"imagen-receta\">\n        <img class=\"img-thumbnail\" src=\"{{ receta.foto }}\" alt=\"\">\n        <span [hidden]=\"receta.isGlutenFree\" class=\"gluten\">\n          <i class=\"fas fa-exclamation-triangle\"></i>\n        </span>\n      </span>\n      <div class=\"pie-foto\">\n        <div class=\"corazon\">\n          <i class=\"fas fa-heart\"></i>\n          {{ receta.likes }}\n        </div>\n        <div>\n          <i>\n            By {{ receta.cocinero }}\n          </i>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-6 p-2\">\n      <h5>Ingredientes</h5>\n      <ul class=\"list-group\">\n        <li *ngFor=\"let ingrediente of receta.ingredientes\" class=\"list-group-item\">\n          {{ ingrediente | titlecase }}\n        </li>\n      </ul>\n    </div> <!--  -->\n  </div> <!-- div.row -->\n  <div class=\"row\">\n    <div class=\"col\">\n      {{ receta.descripcion }}\n    </div>\n  </div>\n</div> <!-- div.container -->\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: RUTAS, AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RUTAS", function () {
      return RUTAS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _paginas_arrays_arrays_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./paginas/arrays/arrays.component */
    "./src/app/paginas/arrays/arrays.component.ts");
    /* harmony import */


    var _paginas_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./paginas/inicio/inicio.component */
    "./src/app/paginas/inicio/inicio.component.ts");
    /* harmony import */


    var _paginas_pokemon_rest_pokemon_rest_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./paginas/pokemon-rest/pokemon-rest.component */
    "./src/app/paginas/pokemon-rest/pokemon-rest.component.ts");
    /* harmony import */


    var _paginas_estilos_estilos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./paginas/estilos/estilos.component */
    "./src/app/paginas/estilos/estilos.component.ts");
    /* harmony import */


    var _paginas_juego_juego_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./paginas/juego/juego.component */
    "./src/app/paginas/juego/juego.component.ts");
    /* harmony import */


    var _paginas_directivas_directivas_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./paginas/directivas/directivas.component */
    "./src/app/paginas/directivas/directivas.component.ts");
    /* harmony import */


    var _paginas_filtros_filtros_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./paginas/filtros/filtros.component */
    "./src/app/paginas/filtros/filtros.component.ts");
    /* harmony import */


    var _paginas_recetas_recetas_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./paginas/recetas/recetas.component */
    "./src/app/paginas/recetas/recetas.component.ts");
    /**
     * Definir las rutas de la app de angular
     * El path debe coincidir con [routerLink] del componente navabar
     */


    var routes = [{
      path: '',
      component: _paginas_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_4__["InicioComponent"]
    }, {
      path: 'arrays',
      component: _paginas_arrays_arrays_component__WEBPACK_IMPORTED_MODULE_3__["ArraysComponent"]
    }, {
      path: 'pokemon',
      component: _paginas_pokemon_rest_pokemon_rest_component__WEBPACK_IMPORTED_MODULE_5__["PokemonRestComponent"]
    }, {
      path: 'estilos',
      component: _paginas_estilos_estilos_component__WEBPACK_IMPORTED_MODULE_6__["EstilosComponent"]
    }, {
      path: 'juego',
      component: _paginas_juego_juego_component__WEBPACK_IMPORTED_MODULE_7__["JuegoComponent"]
    }, {
      path: 'directivas',
      component: _paginas_directivas_directivas_component__WEBPACK_IMPORTED_MODULE_8__["DirectivasComponent"]
    }, {
      path: 'filtros',
      component: _paginas_filtros_filtros_component__WEBPACK_IMPORTED_MODULE_9__["FiltrosComponent"]
    }, {
      path: 'recetas',
      component: _paginas_recetas_recetas_component__WEBPACK_IMPORTED_MODULE_10__["RecetasComponent"]
    }];
    var RUTAS = [{
      nombre: 'inicio',
      URL: '/',
      icono: 'fas fa-home'
    }, {
      nombre: 'productos',
      URL: '/productos',
      icono: 'fas fa-shopping-cart'
    }, {
      nombre: 'juego',
      URL: '/juego',
      icono: 'fas fa-gamepad'
    }, {
      nombre: 'arrays',
      URL: '/arrays',
      icono: 'fas fa-code'
    }, {
      nombre: 'pokemon',
      URL: '/pokemon',
      icono: 'fas fa-frog'
    }, {
      nombre: 'estilos',
      URL: '/estilos',
      icono: 'fab fa-sass'
    }, {
      nombre: 'directivas',
      URL: '/directivas',
      icono: 'fas fa-code'
    }, {
      nombre: 'filtros',
      URL: '/filtros',
      icono: 'fas fa-code'
    }, {
      nombre: 'recetas',
      URL: '/recetas',
      icono: 'fas fa-utensils'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h1 {\n  color: teal;\n}\n\nul.no-style {\n  list-style-type: none;\n}\n\nfooter {\n  min-height: 50px;\n  background-color: lightgray;\n}\n\nfooter div.contenedor {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  -webkit-box-align: center;\n          align-items: center;\n  justify-content: space-around;\n}\n\nfooter i {\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXDAzOTZcXG15LWFwcC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFBO0FDQUo7O0FER0E7RUFDRSxxQkFBQTtBQ0FGOztBREdBO0VBRUUsZ0JBQUE7RUFDQSwyQkFBQTtBQ0RGOztBREVFO0VBQ0UsbUJBQUE7VUFBQSxZQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDZCQUFBO0FDQUo7O0FERUU7RUFDRSxlQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaDEge1xyXG4gICAgY29sb3I6IHRlYWw7XHJcbn1cclxuXHJcbnVsLm5vLXN0eWxlIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcblxyXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gIGRpdi5jb250ZW5lZG9ye1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIH1cclxuICBpIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICB9XHJcbn1cclxuIiwiaDEge1xuICBjb2xvcjogdGVhbDtcbn1cblxudWwubm8tc3R5bGUge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbmZvb3RlciB7XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn1cbmZvb3RlciBkaXYuY29udGVuZWRvciB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5mb290ZXIgaSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./global */
    "./src/app/global.ts"); // componenete principal que se carga al arrancar la app

    /*
    selector:   nombre de la etiqueta para inyectar el componente en HTML
    templateURL:  Vista del HTML
    styleUrls:  Estilo para la vista formato SCSS
    */


    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.globales = _global__WEBPACK_IMPORTED_MODULE_2__["GLOBALES"];
    } // constructor
    ;

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _componentes_prueba_prueba_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./componentes/prueba/prueba.component */
    "./src/app/componentes/prueba/prueba.component.ts");
    /* harmony import */


    var _componentes_boton_boton_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./componentes/boton/boton.component */
    "./src/app/componentes/boton/boton.component.ts");
    /* harmony import */


    var _paginas_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./paginas/inicio/inicio.component */
    "./src/app/paginas/inicio/inicio.component.ts");
    /* harmony import */


    var _paginas_arrays_arrays_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./paginas/arrays/arrays.component */
    "./src/app/paginas/arrays/arrays.component.ts");
    /* harmony import */


    var _componentes_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./componentes/navbar/navbar.component */
    "./src/app/componentes/navbar/navbar.component.ts");
    /* harmony import */


    var _paginas_pokemon_rest_pokemon_rest_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./paginas/pokemon-rest/pokemon-rest.component */
    "./src/app/paginas/pokemon-rest/pokemon-rest.component.ts");
    /* harmony import */


    var _paginas_estilos_estilos_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./paginas/estilos/estilos.component */
    "./src/app/paginas/estilos/estilos.component.ts");
    /* harmony import */


    var _paginas_juego_juego_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./paginas/juego/juego.component */
    "./src/app/paginas/juego/juego.component.ts");
    /* harmony import */


    var _paginas_directivas_directivas_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./paginas/directivas/directivas.component */
    "./src/app/paginas/directivas/directivas.component.ts");
    /* harmony import */


    var _paginas_filtros_filtros_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./paginas/filtros/filtros.component */
    "./src/app/paginas/filtros/filtros.component.ts");
    /* harmony import */


    var _directives_hello_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./directives/hello.directive */
    "./src/app/directives/hello.directive.ts");
    /* harmony import */


    var _directives_subrayar_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./directives/subrayar.directive */
    "./src/app/directives/subrayar.directive.ts");
    /* harmony import */


    var _pipes_animales_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./pipes/animales.pipe */
    "./src/app/pipes/animales.pipe.ts");
    /* harmony import */


    var _paginas_recetas_recetas_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./paginas/recetas/recetas.component */
    "./src/app/paginas/recetas/recetas.component.ts");
    /* harmony import */


    var _pipes_receta_filtro_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./pipes/receta-filtro.pipe */
    "./src/app/pipes/receta-filtro.pipe.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _componentes_prueba_prueba_component__WEBPACK_IMPORTED_MODULE_7__["PruebaComponent"], _componentes_boton_boton_component__WEBPACK_IMPORTED_MODULE_8__["BotonComponent"], _paginas_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_9__["InicioComponent"], _paginas_arrays_arrays_component__WEBPACK_IMPORTED_MODULE_10__["ArraysComponent"], _componentes_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"], _paginas_pokemon_rest_pokemon_rest_component__WEBPACK_IMPORTED_MODULE_12__["PokemonRestComponent"], _paginas_estilos_estilos_component__WEBPACK_IMPORTED_MODULE_13__["EstilosComponent"], _paginas_juego_juego_component__WEBPACK_IMPORTED_MODULE_14__["JuegoComponent"], _paginas_directivas_directivas_component__WEBPACK_IMPORTED_MODULE_15__["DirectivasComponent"], _paginas_filtros_filtros_component__WEBPACK_IMPORTED_MODULE_16__["FiltrosComponent"], _directives_hello_directive__WEBPACK_IMPORTED_MODULE_17__["HelloDirective"], _directives_subrayar_directive__WEBPACK_IMPORTED_MODULE_18__["SubrayarDirective"], _pipes_animales_pipe__WEBPACK_IMPORTED_MODULE_19__["AnimalesPipe"], _paginas_recetas_recetas_component__WEBPACK_IMPORTED_MODULE_20__["RecetasComponent"], _pipes_receta_filtro_pipe__WEBPACK_IMPORTED_MODULE_21__["RecetaFiltroPipe"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/componentes/boton/boton.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/componentes/boton/boton.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesBotonBotonComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2JvdG9uL2JvdG9uLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/componentes/boton/boton.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/componentes/boton/boton.component.ts ***!
    \******************************************************/

  /*! exports provided: BotonComponent */

  /***/
  function srcAppComponentesBotonBotonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BotonComponent", function () {
      return BotonComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BotonComponent =
    /*#__PURE__*/
    function () {
      function BotonComponent() {
        var _this = this;

        _classCallCheck(this, BotonComponent);

        this.pulsado = function () {
          _this.numero += _this.incremento;

          if (_this.numero == 0) {
            _this.incremento = 1;
          }

          if (_this.numero >= 10) {
            _this.incremento = -1;
          }
        };

        this.numero = 0;
        this.incremento = 1;
      }

      _createClass(BotonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BotonComponent;
    }();

    BotonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-boton',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./boton.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/boton/boton.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./boton.component.scss */
      "./src/app/componentes/boton/boton.component.scss")).default]
    })], BotonComponent);
    /***/
  },

  /***/
  "./src/app/componentes/navbar/navbar.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/componentes/navbar/navbar.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesNavbarNavbarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".active {\n  border-bottom: 2px solid black !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbmF2YmFyL0M6XFwwMzk2XFxteS1hcHAvc3JjXFxhcHBcXGNvbXBvbmVudGVzXFxuYXZiYXJcXG5hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50ZXMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlDQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcclxufSIsIi5hY3RpdmUge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/componentes/navbar/navbar.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/componentes/navbar/navbar.component.ts ***!
    \********************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentesNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app-routing.module */
    "./src/app/app-routing.module.ts");

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);

        console.trace('NavbarComponent constructor');
        this.rutas = src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["RUTAS"];
      } // constructor


      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/navbar/navbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.scss */
      "./src/app/componentes/navbar/navbar.component.scss")).default]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/componentes/prueba/prueba.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/componentes/prueba/prueba.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesPruebaPruebaComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3BydWViYS9wcnVlYmEuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/componentes/prueba/prueba.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/componentes/prueba/prueba.component.ts ***!
    \********************************************************/

  /*! exports provided: PruebaComponent */

  /***/
  function srcAppComponentesPruebaPruebaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PruebaComponent", function () {
      return PruebaComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PruebaComponent =
    /*#__PURE__*/
    function () {
      function PruebaComponent() {
        _classCallCheck(this, PruebaComponent);
      }

      _createClass(PruebaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PruebaComponent;
    }();

    PruebaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-prueba',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./prueba.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/prueba/prueba.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./prueba.component.scss */
      "./src/app/componentes/prueba/prueba.component.scss")).default]
    })], PruebaComponent);
    /***/
  },

  /***/
  "./src/app/directives/hello.directive.ts":
  /*!***********************************************!*\
    !*** ./src/app/directives/hello.directive.ts ***!
    \***********************************************/

  /*! exports provided: HelloDirective */

  /***/
  function srcAppDirectivesHelloDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelloDirective", function () {
      return HelloDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HelloDirective =
    /*#__PURE__*/
    function () {
      function HelloDirective(element) {
        _classCallCheck(this, HelloDirective);

        this.element = element;
        console.trace('HelloDirective constructor');
      } // constructor


      _createClass(HelloDirective, [{
        key: "publiconMouseEnter",
        value: function publiconMouseEnter() {
          console.trace('HelloDirective publiconMouseEnter');
          this.element.nativeElement.style.backgroundColor = this.appHello;
        } // publiconMouseEnter

      }, {
        key: "publiconMouseLeave",
        value: function publiconMouseLeave() {
          console.trace('HelloDirective publiconMouseLeave');
          this.element.nativeElement.style.backgroundColor = 'green';
        } // publiconMouseLeave

      }]);

      return HelloDirective;
    }(); // HelloDirective


    HelloDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], HelloDirective.prototype, "appHello", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter')], HelloDirective.prototype, "publiconMouseEnter", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave')], HelloDirective.prototype, "publiconMouseLeave", null);
    HelloDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appHello]'
    })], HelloDirective);
    /***/
  },

  /***/
  "./src/app/directives/subrayar.directive.ts":
  /*!**************************************************!*\
    !*** ./src/app/directives/subrayar.directive.ts ***!
    \**************************************************/

  /*! exports provided: SubrayarDirective */

  /***/
  function srcAppDirectivesSubrayarDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubrayarDirective", function () {
      return SubrayarDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SubrayarDirective =
    /*#__PURE__*/
    function () {
      function SubrayarDirective(element) {
        _classCallCheck(this, SubrayarDirective);

        this.element = element;
        console.trace('constructor SubrayarDirective');
        this.colorAnterior = '';
      }

      _createClass(SubrayarDirective, [{
        key: "publiconMouseEnter",
        value: function publiconMouseEnter() {
          console.trace('SubrayarDirective publiconMouseEnter ');
          this.colorAnterior = this.element.nativeElement.style.color;
          this.element.nativeElement.style.color = this.appSubrayar;
          this.element.nativeElement.style.textDecoration = 'underline';
        } // publiconMouseEnter

      }, {
        key: "publiconMouseLeave",
        value: function publiconMouseLeave() {
          console.trace('SubrayarDirective publiconMouseLeave');
          this.element.nativeElement.style.color = this.colorAnterior;
          this.element.nativeElement.style.textDecoration = 'none';
        } // publiconMouseLeave

      }]);

      return SubrayarDirective;
    }();

    SubrayarDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SubrayarDirective.prototype, "appSubrayar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter')], SubrayarDirective.prototype, "publiconMouseEnter", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave')], SubrayarDirective.prototype, "publiconMouseLeave", null);
    SubrayarDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appSubrayar]'
    })], SubrayarDirective);
    /***/
  },

  /***/
  "./src/app/global.ts":
  /*!***************************!*\
    !*** ./src/app/global.ts ***!
    \***************************/

  /*! exports provided: GLOBALES */

  /***/
  function srcAppGlobalTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GLOBALES", function () {
      return GLOBALES;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var GLOBALES = {
      nombre: 'Joseba Merino Pina',
      github: 'https://github.com/JosebaMerino/AngularIpartek',
      version: 0.1
    };
    /***/
  },

  /***/
  "./src/app/mocks.ts":
  /*!**************************!*\
    !*** ./src/app/mocks.ts ***!
    \**************************/

  /*! exports provided: RECETAS, ANIMALES */

  /***/
  function srcAppMocksTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RECETAS", function () {
      return RECETAS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ANIMALES", function () {
      return ANIMALES;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var RECETAS = [{
      id: 1,
      nombre: 'Marmitako',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere, leo id lobortis scelerisque, nisi mi placerat dui, sit amet molestie velit enim at nunc. Nam ultricies est ac quam feugiat porttitor. In non consequat libero, vel suscipit libero. Donec vel lectus purus. Etiam ut elementum lectus. Proin rutrum suscipit ultricies. Nullam maximus velit justo, nec lacinia est dignissim in. Ut lacinia augue pellentesque tincidunt sollicitudin. Ut eu iaculis massa. Nunc iaculis est in lectus pretium, eu porta odio placerat. Maecenas nibh purus, mollis in elementum at, faucibus eu justo. Aliquam justo arcu, dictum vitae maximus sed, luctus et nunc.                            Etiam ut est id ante porta varius. Cras blandit lectus id lectus finibus, in venenatis neque porta. Pellentesque et consectetur tellus. Nulla nec odio leo. Mauris sed placerat dolor. Phasellus porta nec urna in porta. Duis faucibus et diam sit amet cursus. In varius sollicitudin massa. Nullam mattis velit sed lectus hendrerit, quis malesuada nibh cursus. Vestibulum vestibulum sapien ac neque tempor, sit amet scelerisque dolor sollicitudin. Suspendisse quis arcu et eros tincidunt volutpat quis vitae lacus. Phasellus pretium commodo sapien, non accumsan nisi egestas nec. Etiam ante purus, luctus eget orci vel, accumsan lobortis nulla. Curabitur posuere turpis lacus, ac sodales mauris accumsan in.Nam dapibus dui nec augue ornare egestas. Maecenas efficitur lacinia metus in aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis consectetur, lectus iaculis vulputate congue, arcu enim tincidunt felis, ut bibendum magna quam eget ipsum. Curabitur nec est a ipsum ornare efficitur venenatis non erat. Quisque rhoncus leo et ultrices vestibulum. Quisque viverra libero sit amet nunc porttitor, a dignissim mi luctus. Aenean ut augue tempor, ullamcorper nibh ac, fringilla massa. Aliquam sollicitudin ipsum enim, a gravida neque cursus eu. Proin commodo felis interdum arcu tincidunt laoreet ac a ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam scelerisque ligula sed est porta, nec tincidunt mi placerat. Pellentesque sollicitudin ante dapibus tortor condimentum, et rutrum quam blandit. Donec id tincidunt elit. Integer id ultricies ex. Aliquam erat volutpat.',
      foto: 'https://unareceta.com/wp-content/uploads/2016/08/receta-marmitako-de-verduras.jpg',
      likes: '24',
      isGlutenFree: true,
      cocinero: 'Robin Food',
      ingredientes: ['patata', 'bonito', 'pimientos', 'cebolla']
    }, {
      id: 2,
      nombre: 'Bacalao al pil-pil',
      descripcion: 'El bacalao al pil-pil es un plato tradicional español típico de la cocina vasca elaborado con cuatro ingredientes básicos: bacalao, aceite de oliva, ajo y pimientos guindillas.',
      foto: 'https://www.miscosillasdecocina.com/wp-content/uploads/2014/02/bacalao-pilpil-e1491084486535.jpg',
      likes: '32',
      isGlutenFree: true,
      cocinero: 'Karlos Argiñano',
      ingredientes: ['bacalao', 'aceite', 'ajo', 'guindilla']
    }, {
      id: 3,
      nombre: 'Falafel',
      descripcion: 'El faláfel o falafel es una croqueta de garbanzos o haba y se originó en algún lugar del subcontinente indio.',
      foto: 'http://recetasarabes.com/wp-content/img-recetas-arabes/2012/03/xfalafel-3-500x262.jpg.pagespeed.ic.HYdrSUMpct.webp',
      likes: '12',
      isGlutenFree: false,
      cocinero: 'Ivan Surinder',
      ingredientes: ['garbanzos', 'cebolla', 'aceite', 'comino', 'perejil', 'pimienta']
    }, {
      id: 4,
      nombre: 'Talo',
      descripcion: 'El talo es un plato típico del País Vasco, Navarra y País Vasco francés similar a la arepa de Colombia y Venezuela o a una tortilla de maíz grande de México.',
      foto: 'https://www.euskadi-basquecountry.org/blog/wp-content/uploads/2015/02/talo-JB-argazkiak.jpg',
      likes: '27',
      isGlutenFree: false,
      cocinero: 'Amama',
      ingredientes: ['txistorra', 'harina', 'queso', 'aceite']
    }, {
      id: 5,
      nombre: 'Sushi',
      descripcion: 'Plato de origen japonés basado en arroz que se acompaña en general con: sésamo, salmón o trucha, dependiendo de los gustos puede estar crudo o ahumado, adobado con vinagre de arroz, azúcar, sal y otros ingredientes, como verduras, pescados o mariscos.',
      foto: 'https://enlacocina.telemesa.es/wp-content/uploads/2018/02/sushi.jpg',
      likes: '72',
      isGlutenFree: true,
      cocinero: 'Itamae',
      ingredientes: ['arroz', 'sésamo', 'salmón', 'vinagre de arroz', 'verdura']
    }, {
      id: 6,
      nombre: 'Fajitas',
      descripcion: 'La fajita es uno de los platos más tradicionales y populares de la cocina texana. Consiste en carne asada a la parrilla y cortada en tiras, servida sobre una tortilla de harina de maíz o harina de trigo.',
      foto: 'https://unareceta.com/wp-content/uploads/2016/08/receta-fajitas-de-carne-picada-640x417.jpg',
      likes: '58',
      isGlutenFree: false,
      cocinero: 'Pablo Escobar',
      ingredientes: ['pechuga', 'cebolla', 'pimientos', 'tomate']
    }];
    var ANIMALES = [{
      "id": 1,
      "Tipo": "Perro",
      "Nombre": "Pascual",
      "Observacion": "Esta mal",
      "Ubicacion": "Se encuentra en robledo cerca a la quintana",
      "Rasgos": "Tiene el pelo cafe  , ademas tiene una patica mala",
      "Imagen": "https://www.elpaisdelosjovenes.com/wp-content/uploads/2015/05/03_02.jpg"
    }, {
      "id": 4,
      "Tipo": "Gato",
      "Nombre": "Icaro",
      "Observacion": "Es un gatico cachorro que esta en la calle",
      "Ubicacion": "Esta en belen  por los lados de  la udem",
      "Rasgos": "Es pequeño  y el pelo lo tiene negro",
      "Imagen": "http://static.consumer.es/www/imgs/2013/07/adoptar-gatos-cachorros-felinos-animales-mascotas-adopcion-acogida-art.jpg"
    }, {
      "id": 3,
      "Tipo": "Caballo",
      "Nombre": "Oreo",
      "Observacion": "Esta denutrido",
      "Ubicacion": "en un lote por la autipista medellin bogota",
      "Rasgos": "Es blanco y  esta  muy delgado",
      "Imagen": "http://www.pulso-digital.com/wp-content/uploads/2014/07/CABALLOS-ENFERMOS-PARA-SACRIFICAR.jpg"
    }, {
      "id": 2,
      "Tipo": "Perro",
      "Nombre": "Sacha",
      "Observacion": "Tiene un ojo  herido",
      "Ubicacion": "Esta en aranjuez por el parque",
      "Rasgos": "Es un perro criollo y tiene un ojo spr herido",
      "Imagen": "http://www.cuidadosdemascotas.com/wp-content/uploads/2015/06/perro_herido_cuidados_mascotas-300x225.jpg"
    }, {
      "id": 5,
      "Tipo": "Gato",
      "Nombre": "Nica",
      "Observacion": "Es una gatica que acabo de dar a luz",
      "Ubicacion": "Parque del poblado",
      "Rasgos": "Es una gata blanca y tiene 6 gaticos cachorros",
      "Imagen": "https://lh4.googleusercontent.com/-PKoAqrneSVg/TyPbkz9VqDI/AAAAAAAAAZg/QycSgXbOPUM/s800/Familia%2520de%2520gatos%2520Korat%2520%2528Gato%2520de%2520la%2520suerte%252C%2520Gat%2520Korat%252C%2520Si-sawaat%252C%2520Gat%2520de%2520la%2520Sort%252C%2520Korat-Katze%252C%2520Gatto%2520Korat%2529.jpg"
    }, {
      "id": 6,
      "Tipo": "Pajaro",
      "Nombre": "Cantor",
      "Observacion": "Tiene una ala aproriada",
      "Ubicacion": "Esta en prometeo",
      "Rasgos": "Es un pechi rojo",
      "Imagen": "https://www.euroresidentes.com/hogar/mascotas/wp-content/uploads/sites/5/2014/07/como-curar-pajaro-herido-euroresidentes.jpg"
    }, {
      "id": 7,
      "Tipo": "Perro",
      "Nombre": "scott",
      "Observacion": "Esta muy herido",
      "Ubicacion": "Esta en belen cerca a la udem",
      "Rasgos": "Tes un labrador  viejito colo cafe ",
      "Imagen": "http://www.perrosdebusqueda.es/wp-content/uploads/2015/11/Zarpas-herido.jpg"
    }, {
      "id": 8,
      "Tipo": "Perro",
      "Nombre": "Toby",
      "Observacion": "Para adopcion",
      "Ubicacion": "Esta en belen cerca a la udem",
      "Rasgos": "Tiene el pelo cafe  , ademas tiene una patica mala",
      "Imagen": "http://blog.feebbo.com/wp-content/uploads/2015/10/Im%C3%A1genes-para-WhatsApp-de-Animales-2.jpg"
    }, {
      "id": 9,
      "Tipo": "Gato",
      "Nombre": "Sas",
      "Observacion": " para dar en adopcion",
      "Ubicacion": "Esta en el barrio los colores",
      "Rasgos": "Tiene el cabello gris con blanco ",
      "Imagen": "http://misanimales.com/wp-content/uploads/2015/01/cascabel-gato.jpg"
    }, {
      "id": 10,
      "Tipo": "Gato",
      "Nombre": "NN",
      "Observacion": "Esta mal",
      "Ubicacion": "lo vi por la canalizacion del estadio",
      "Rasgos": "Tiene el pelo cafe  con blanco , ademas tiene una patica mala",
      "Imagen": "http://mascotas-static.hola.com/gatos/files/2012/10/stray-cat-169113_1280.jpg"
    }, {
      "id": 11,
      "Tipo": "Perro",
      "Nombre": "Boxer",
      "Observacion": "Se ve que tiene dueño esta muy bien ",
      "Ubicacion": "Lo vi el jardin botanico por el lago",
      "Rasgos": "Es cafe con blanco",
      "Imagen": "http://3.bp.blogspot.com/-XtqcDS3NACY/TyeEFEwPvKI/AAAAAAAAFA0/CPl8ilSKwCI/s200/Boxer+1.JPG"
    }, {
      "id": 12,
      "Tipo": "Perro",
      "Nombre": "NN",
      "Observacion": "Lo dejaron en una caja , con  dos piernas rotas",
      "Ubicacion": "Esta en la estacion del metro floresta",
      "Rasgos": "Tiene el pelo cafe con negro y ya esta algo  viejito",
      "Imagen": "http://cde.elcomercio.pe/66/ima/0/0/6/7/0/670997.jpg"
    }, {
      "id": 13,
      "Tipo": "Perro",
      "Nombre": "Toby",
      "Observacion": "Parece que tiene dueño por que esta muy bien ",
      "Ubicacion": "lo vi  por el exito de robledo",
      "Rasgos": "Es un perro criollo de color cafe de raza media",
      "Imagen": "http://img.informador.com.mx/biblioteca/imagen/370x277/852/851252.jpg"
    }, {
      "id": 14,
      "Tipo": "Gato",
      "Nombre": "Tobias",
      "Observacion": "Para adopcion",
      "Ubicacion": "en la perla",
      "Rasgos": "Es un cachorro",
      "Imagen": "http://g.cdn.ecn.cl/fenomenos-paranormales/files/2015/07/gatos-adivinos.jpg"
    }, {
      "id": 15,
      "Tipo": "Gato",
      "Nombre": "sin nombre",
      "Observacion": "Para dar en adopcion",
      "Ubicacion": "Esta en belen cerca al parque",
      "Rasgos": "Tiene apenas un mes de nacido",
      "Imagen": "http://ecoosfera.com/wp-content/imagenes/0012-O-miado-dos-gatos-1-1024x480.jpg"
    }, {
      "id": 16,
      "Tipo": "Perro",
      "Nombre": "Kiko",
      "Observacion": "en adopcion",
      "Ubicacion": "Estoy en bello",
      "Rasgos": "Perro pitbull",
      "Imagen": "http://i58.photobucket.com/albums/g254/big-T1/pitbull_pup11.jpg"
    }];
    /***/
  },

  /***/
  "./src/app/model/pokemon.ts":
  /*!**********************************!*\
    !*** ./src/app/model/pokemon.ts ***!
    \**********************************/

  /*! exports provided: Pokemon */

  /***/
  function srcAppModelPokemonTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Pokemon", function () {
      return Pokemon;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Pokemon =
    /*#__PURE__*/
    function () {
      function Pokemon() {
        var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 25;
        var imagen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png';
        var nombre = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Pikachu';

        _classCallCheck(this, Pokemon);

        this.nombre = nombre;
        this.id = id;
        this.imagen = imagen;
      }

      _createClass(Pokemon, [{
        key: "nombre",
        get: function get() {
          return this._nombre;
        },
        set: function set(value) {
          this._nombre = value;
        }
      }, {
        key: "imagen",
        get: function get() {
          return this._imagen;
        },
        set: function set(value) {
          this._imagen = value;
        }
      }, {
        key: "id",
        get: function get() {
          return this._id;
        },
        set: function set(value) {
          this._id = value;
        }
      }, {
        key: "habilidades",
        get: function get() {
          return this._habilidades;
        },
        set: function set(value) {
          this._habilidades = value;
        }
      }]);

      return Pokemon;
    }();
    /***/

  },

  /***/
  "./src/app/paginas/arrays/arrays.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/paginas/arrays/arrays.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPaginasArraysArraysComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvYXJyYXlzL2FycmF5cy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/paginas/arrays/arrays.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/paginas/arrays/arrays.component.ts ***!
    \****************************************************/

  /*! exports provided: ArraysComponent */

  /***/
  function srcAppPaginasArraysArraysComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArraysComponent", function () {
      return ArraysComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ArraysComponent =
    /*#__PURE__*/
    function () {
      function ArraysComponent() {
        _classCallCheck(this, ArraysComponent);

        console.trace('ArraysComponent constructor');
        this.total = 0;
        this.totalDescuento = 0;
        this.aSoloNombres = [];
        this.frutasConDescuento = [];
        this.frutasAmarillas = [];
        this.precioFrutasAmarillas = 0;
        this.primeraVerde = {};
        this.todosColores = [];
        this.frutas = [{
          'nombre': 'fresa',
          'precio': 2.45,
          'descuento': 0,
          'colores': ['roja']
        }, {
          'nombre': 'pera',
          'precio': 3.50,
          'descuento': 10,
          'colores': ['amarilla', 'verde']
        }, {
          'nombre': 'manzana',
          'precio': 1.99,
          'descuento': 50,
          'colores': ['amarilla', 'verde', 'roja']
        }];
      }

      _createClass(ArraysComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          console.trace('ArraysComponent ngOnInit');
          /* Modo extendido para poder depurar
          this.total = this.frutas.map( el => {
            console.debug(el);
            return el.precio;
          }).
          reduce((previous, current)=> {
            return previous + current;
          });
          */

          this.aSoloNombres = this.frutas.map(function (el) {
            return el.nombre;
          });
          this.frutasConDescuento = this.frutas.filter(function (el) {
            return el.descuento > 0;
          }).map(function (el) {
            return el.nombre;
          }); // Modo reducido

          this.total = this.frutas.map(function (el) {
            return el.precio;
          }).reduce(function (p, c) {
            return p + c;
          });
          this.totalDescuento = this.frutas.reduce(function (p, c) {
            return p + _this2.precioConDescuento(c.precio, c.descuento);
          }, 0);
          this.frutasAmarillas = this.frutas.filter(function (fruta) {
            return fruta.colores.find(function (color) {
              return color === 'amarilla';
            });
          }).map(function (el) {
            return el.nombre;
          });
          this.precioFrutasAmarillas = this.frutas.filter(function (fruta) {
            return fruta.colores.find(function (color) {
              return color === 'amarilla';
            });
          }).reduce(function (p, c) {
            return p + _this2.precioConDescuento(c.precio, c.descuento);
          }, 0);
          this.primeraVerde = this.frutas.find(function (fruta) {
            return fruta.colores.find(function (color) {
              return color === 'verde';
            });
          });
          console.log("Precio total: ", this.total);
          this.todosColores = this.frutas.reduce(function (p, c) {
            return p.concat(c.colores.filter(function (color) {
              return !p.includes(color);
            }));
          }, []);
        }
      }, {
        key: "precioConDescuento",
        value: function precioConDescuento(precio, descuento) {
          return precio - precio * descuento / 100;
        }
      }]);

      return ArraysComponent;
    }();

    ArraysComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-arrays',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./arrays.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/arrays/arrays.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./arrays.component.scss */
      "./src/app/paginas/arrays/arrays.component.scss")).default]
    })], ArraysComponent);
    /***/
  },

  /***/
  "./src/app/paginas/directivas/directivas.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/paginas/directivas/directivas.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPaginasDirectivasDirectivasComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".decoracion {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9kaXJlY3RpdmFzL0M6XFwwMzk2XFxteS1hcHAvc3JjXFxhcHBcXHBhZ2luYXNcXGRpcmVjdGl2YXNcXGRpcmVjdGl2YXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2luYXMvZGlyZWN0aXZhcy9kaXJlY3RpdmFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvZGlyZWN0aXZhcy9kaXJlY3RpdmFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlY29yYWNpb24ge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbiIsIi5kZWNvcmFjaW9uIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/paginas/directivas/directivas.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/paginas/directivas/directivas.component.ts ***!
    \************************************************************/

  /*! exports provided: DirectivasComponent */

  /***/
  function srcAppPaginasDirectivasDirectivasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DirectivasComponent", function () {
      return DirectivasComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DirectivasComponent =
    /*#__PURE__*/
    function () {
      function DirectivasComponent() {
        _classCallCheck(this, DirectivasComponent);

        this.colorSeleccionado = 'green';
      }

      _createClass(DirectivasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DirectivasComponent;
    }();

    DirectivasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-directivas',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./directivas.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/directivas/directivas.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./directivas.component.scss */
      "./src/app/paginas/directivas/directivas.component.scss")).default]
    })], DirectivasComponent);
    /***/
  },

  /***/
  "./src/app/paginas/estilos/estilos.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/paginas/estilos/estilos.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPaginasEstilosEstilosComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h1 {\n  color: #da9393;\n}\n\np code {\n  color: #00FF41;\n  background-color: #0D0208;\n  padding: 2px 3px;\n}\n\n.borde10 {\n  border-radius: 10px;\n  border: 1px solid #00FF41;\n  padding: 10px;\n}\n\n.borde50 {\n  border-radius: 50px;\n  border: 1px solid #da9393;\n  padding: 10px;\n}\n\n/*\nCrear 3 clases para 3 botones\n1. boton\n\n* mirar hover en SCSS\n*/\n\n@-webkit-keyframes spin {\n  100% {\n    -webkit-transform: rotateX(360deg);\n            transform: rotateX(360deg);\n  }\n}\n\n@keyframes spin {\n  100% {\n    -webkit-transform: rotateX(360deg);\n            transform: rotateX(360deg);\n  }\n}\n\n.boton-rojo, .boton-verde, .boton {\n  padding: 10px;\n  border-radius: 20px;\n}\n\n.boton-verde {\n  background-color: #00FF41;\n}\n\n.boton-verde:hover {\n  background-color: green;\n  -webkit-animation-name: spin;\n          animation-name: spin;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n.boton-rojo {\n  background-color: red;\n}\n\n.boton-rojo:hover {\n  background-color: #810303;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9lc3RpbG9zL0M6XFwwMzk2XFxteS1hcHAvc3JjXFxhcHBcXHBhZ2luYXNcXGVzdGlsb3NcXGVzdGlsb3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2luYXMvZXN0aWxvcy9lc3RpbG9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0UsY0FKWTtBQ0RkOztBRFNFO0VBQ0UsY0FSVTtFQVNWLHlCQVJVO0VBU1YsZ0JBQUE7QUNOSjs7QURtQkE7RUFORSxtQkFPa0I7RUFObEIseUJBQUE7RUFDQSxhQUFBO0FDVEY7O0FEa0JBO0VBWEUsbUJBWWtCO0VBWGxCLHlCQUFBO0VBQ0EsYUFBQTtBQ0hGOztBRGdCQTs7Ozs7Q0FBQTs7QUFRQTtFQUNFO0lBQU8sa0NBQUE7WUFBQSwwQkFBQTtFQ2RQO0FBQ0Y7O0FEWUE7RUFDRTtJQUFPLGtDQUFBO1lBQUEsMEJBQUE7RUNkUDtBQUNGOztBRGdCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ2RGOztBRHFCQTtFQUVFLHlCQXZEWTtBQ29DZDs7QURvQkU7RUFDRSx1QkFBQTtFQUNBLDRCQUFBO1VBQUEsb0JBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0FDbEJKOztBRHFCQTtFQUVFLHFCQUFBO0FDbkJGOztBRG9CRTtFQUNFLHlCQUFBO0FDbEJKIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hcy9lc3RpbG9zL2VzdGlsb3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTZSBwdWVkZW4gaGFjZXIgY29tZW50YXJpb24gZW4gbGluZWEgcXVlIGVuIGVsIGdlbmVyYWRvIG5vIHNlIHZlXHJcblxyXG4vLyBWYXJpYWJsZXNcclxuJGNvbG9yX3BpbmsgOiByZ2IoMjE4LCAxNDcsIDE0Nyk7XHJcbiRjb2xvcl9ncmVlbjogIzAwRkY0MTtcclxuJGNvbG9yX2JsYWNrOiAjMEQwMjA4O1xyXG5oMSB7XHJcbiAgY29sb3I6ICRjb2xvcl9waW5rICA7XHJcbn1cclxuXHJcbnAge1xyXG4gIGNvZGUge1xyXG4gICAgY29sb3I6ICRjb2xvcl9ncmVlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl9ibGFjaztcclxuICAgIHBhZGRpbmc6IDJweCAzcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBNaXhpbnMgbyBmdW5jaW9uZXMgcGFyYSByZXV0aWxpemFyXHJcblxyXG5AbWl4aW4gcmVkb25kZXIoICRyYWRpbywgJGNvbG9yICkge1xyXG4gIGJvcmRlci1yYWRpdXM6ICRyYWRpbztcclxuICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3I7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuXHJcbi5ib3JkZTEwIHtcclxuICBAaW5jbHVkZSByZWRvbmRlcigxMHB4LCAkY29sb3JfZ3JlZW4pO1xyXG5cclxufVxyXG5cclxuLmJvcmRlNTAge1xyXG4gIEBpbmNsdWRlIHJlZG9uZGVyKDUwcHgsICRjb2xvcl9waW5rKTtcclxufVxyXG5cclxuLypcclxuQ3JlYXIgMyBjbGFzZXMgcGFyYSAzIGJvdG9uZXNcclxuMS4gYm90b25cclxuXHJcbiogbWlyYXIgaG92ZXIgZW4gU0NTU1xyXG4qL1xyXG5cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgMTAwJSB7IHRyYW5zZm9ybTpyb3RhdGVYKDM2MGRlZyk7IH1cclxufVxyXG5cclxuJWJvdG9uLXNoYXJlZCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4uYm90b24ge1xyXG4gIEBleHRlbmQgJWJvdG9uLXNoYXJlZDtcclxufVxyXG5cclxuLmJvdG9uLXZlcmRlIHtcclxuICBAZXh0ZW5kICVib3Rvbi1zaGFyZWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX2dyZWVuO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICBhbmltYXRpb24tbmFtZTogc3BpbjtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgfVxyXG59XHJcbi5ib3Rvbi1yb2pvIHtcclxuICBAZXh0ZW5kICVib3Rvbi1zaGFyZWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOSwgMywgMyk7XHJcbiAgfVxyXG59XHJcbiIsImgxIHtcbiAgY29sb3I6ICNkYTkzOTM7XG59XG5cbnAgY29kZSB7XG4gIGNvbG9yOiAjMDBGRjQxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEQwMjA4O1xuICBwYWRkaW5nOiAycHggM3B4O1xufVxuXG4uYm9yZGUxMCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMEZGNDE7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5ib3JkZTUwIHtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RhOTM5MztcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLypcbkNyZWFyIDMgY2xhc2VzIHBhcmEgMyBib3RvbmVzXG4xLiBib3RvblxuXG4qIG1pcmFyIGhvdmVyIGVuIFNDU1NcbiovXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMzYwZGVnKTtcbiAgfVxufVxuLmJvdG9uLXJvam8sIC5ib3Rvbi12ZXJkZSwgLmJvdG9uIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmJvdG9uLXZlcmRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwRkY0MTtcbn1cbi5ib3Rvbi12ZXJkZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBhbmltYXRpb24tbmFtZTogc3BpbjtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbn1cblxuLmJvdG9uLXJvam8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG4uYm90b24tcm9qbzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MTAzMDM7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/paginas/estilos/estilos.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/paginas/estilos/estilos.component.ts ***!
    \******************************************************/

  /*! exports provided: EstilosComponent */

  /***/
  function srcAppPaginasEstilosEstilosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EstilosComponent", function () {
      return EstilosComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EstilosComponent =
    /*#__PURE__*/
    function () {
      function EstilosComponent() {
        _classCallCheck(this, EstilosComponent);
      }

      _createClass(EstilosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EstilosComponent;
    }();

    EstilosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-estilos',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./estilos.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/estilos/estilos.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./estilos.component.scss */
      "./src/app/paginas/estilos/estilos.component.scss")).default]
    })], EstilosComponent);
    /***/
  },

  /***/
  "./src/app/paginas/filtros/filtros.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/paginas/filtros/filtros.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPaginasFiltrosFiltrosComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "li {\n  display: -webkit-box;\n  display: flex;\n}\nli span {\n  font-size: 1.6rem;\n}\nli .circle {\n  width: 75px;\n  height: 75px;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-right: 10px;\n}\nli div p.nombre {\n  font-size: 1.6rem;\n}\n.code {\n  background-color: black;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9maWx0cm9zL0M6XFwwMzk2XFxteS1hcHAvc3JjXFxhcHBcXHBhZ2luYXNcXGZpbHRyb3NcXGZpbHRyb3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2luYXMvZmlsdHJvcy9maWx0cm9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0FDQ0Y7QURBRTtFQUNFLGlCQUFBO0FDRUo7QURBRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0Esa0JBQUE7QUNFSjtBREVJO0VBQ0UsaUJBQUE7QUNBTjtBRE1BO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9wYWdpbmFzL2ZpbHRyb3MvZmlsdHJvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImxpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgfVxyXG4gIC5jaXJjbGUge1xyXG4gICAgd2lkdGg6IDc1cHg7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcblxyXG4gIGRpdiB7XHJcbiAgICBwLm5vbWJyZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbi5jb2RlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIiwibGkge1xuICBkaXNwbGF5OiBmbGV4O1xufVxubGkgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxubGkgLmNpcmNsZSB7XG4gIHdpZHRoOiA3NXB4O1xuICBoZWlnaHQ6IDc1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbmxpIGRpdiBwLm5vbWJyZSB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG4uY29kZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/paginas/filtros/filtros.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/paginas/filtros/filtros.component.ts ***!
    \******************************************************/

  /*! exports provided: FiltrosComponent */

  /***/
  function srcAppPaginasFiltrosFiltrosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FiltrosComponent", function () {
      return FiltrosComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_mocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/mocks */
    "./src/app/mocks.ts");

    var FiltrosComponent =
    /*#__PURE__*/
    function () {
      function FiltrosComponent() {
        _classCallCheck(this, FiltrosComponent);

        console.trace('FiltrosComponent constructor');
        this.coche = {
          nombre: 'Audi R8',
          color: 'blanco',
          isDiesel: false,
          precio: 100000.456
        };
        this.animales = src_app_mocks__WEBPACK_IMPORTED_MODULE_2__["ANIMALES"];
        this.tipo = 'todos';
        this.tipos = new Set(this.animales.map(function (el) {
          return el.Tipo;
        }));
        console.debug(this.tipos);
      } // constructor


      _createClass(FiltrosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.trace('FiltrosComponent ngOnInit');
        } // ngOnInit

      }]);

      return FiltrosComponent;
    }(); // FiltrosComponent


    FiltrosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-filtros',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./filtros.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/filtros/filtros.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./filtros.component.scss */
      "./src/app/paginas/filtros/filtros.component.scss")).default]
    })], FiltrosComponent);
    /***/
  },

  /***/
  "./src/app/paginas/inicio/inicio.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/paginas/inicio/inicio.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPaginasInicioInicioComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".rojo {\n  color: red;\n}\n\n.verde {\n  color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9pbmljaW8vQzpcXDAzOTZcXG15LWFwcC9zcmNcXGFwcFxccGFnaW5hc1xcaW5pY2lvXFxpbmljaW8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2luYXMvaW5pY2lvL2luaWNpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7QUNDRjs7QURDQTtFQUNFLFlBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvaW5pY2lvL2luaWNpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb2pvIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbi52ZXJkZSB7XHJcbiAgY29sb3I6IGdyZWVuXHJcbn1cclxuXHJcblxyXG4iLCIucm9qbyB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi52ZXJkZSB7XG4gIGNvbG9yOiBncmVlbjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/paginas/inicio/inicio.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/paginas/inicio/inicio.component.ts ***!
    \****************************************************/

  /*! exports provided: InicioComponent */

  /***/
  function srcAppPaginasInicioInicioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InicioComponent", function () {
      return InicioComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var InicioComponent =
    /*#__PURE__*/
    function () {
      function InicioComponent() {
        _classCallCheck(this, InicioComponent);

        console.trace('InicioComponent constructor');
        this.titulo = "BIENVENIDO";
        this.numeroClicks = 0;
        this.visible = false;
      } // constructor


      _createClass(InicioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.trace('InicioComponent ngOnInit');
        } // ngOnInit

      }, {
        key: "contarClicks",
        value: function contarClicks() {
          console.trace(this.numeroClicks);
          this.numeroClicks++;
        } // contarClicks

      }, {
        key: "decirAdios",
        value: function decirAdios() {
          console.trace('decirAdios');
          this.visible = true;
        } // decirAdios

      }]);

      return InicioComponent;
    }(); // InicioComponent


    InicioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inicio',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./inicio.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/inicio/inicio.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./inicio.component.scss */
      "./src/app/paginas/inicio/inicio.component.scss")).default]
    })], InicioComponent);
    /***/
  },

  /***/
  "./src/app/paginas/juego/juego.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/paginas/juego/juego.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPaginasJuegoJuegoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".marcador {\n  font-size: 40vh;\n}\n\n.btn-contar {\n  height: 20vh;\n  font-size: 10vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9qdWVnby9DOlxcMDM5NlxcbXktYXBwL3NyY1xcYXBwXFxwYWdpbmFzXFxqdWVnb1xcanVlZ28uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2luYXMvanVlZ28vanVlZ28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hcy9qdWVnby9qdWVnby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJjYWRvciB7XHJcbiAgZm9udC1zaXplOiA0MHZoO1xyXG59XHJcblxyXG4uYnRuLWNvbnRhciB7XHJcbiAgaGVpZ2h0OiAyMHZoO1xyXG4gIGZvbnQtc2l6ZTogMTB2aDtcclxufVxyXG4iLCIubWFyY2Fkb3Ige1xuICBmb250LXNpemU6IDQwdmg7XG59XG5cbi5idG4tY29udGFyIHtcbiAgaGVpZ2h0OiAyMHZoO1xuICBmb250LXNpemU6IDEwdmg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/paginas/juego/juego.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/paginas/juego/juego.component.ts ***!
    \**************************************************/

  /*! exports provided: JuegoComponent */

  /***/
  function srcAppPaginasJuegoJuegoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JuegoComponent", function () {
      return JuegoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TIEMPO_JUEGO = 2000;
    var TIEMPO_EMPIECE = 1000;

    var JuegoComponent =
    /*#__PURE__*/
    function () {
      function JuegoComponent() {
        _classCallCheck(this, JuegoComponent);

        this.puntos = 0;
        this.enJuego = false;
        this.puedeJugar = true;
        this.jugador = '';
        this.jugadores = new Map();
        this.jugadores.set('Jugador', 2);
      } // constructor


      _createClass(JuegoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "contar",
        value: function contar() {
          this.puntos++;
        }
      }, {
        key: "jugar",
        value: function jugar() {
          var _this3 = this;

          this.puedeJugar = false;
          setTimeout(function () {
            _this3.enJuego = true;
          }, TIEMPO_EMPIECE);
          setTimeout(function () {
            _this3.finJuego();
          }, TIEMPO_JUEGO + TIEMPO_EMPIECE);
        }
      }, {
        key: "finJuego",
        value: function finJuego() {
          this.enJuego = false;
          this.jugadores.set(this.jugador, this.puntos);
          this.puntos = 0;
          this.puedeJugar = true;
        }
      }, {
        key: "mostrarJugadores",
        value: function mostrarJugadores() {
          var jugadores = this.jugadores.entries();
          var jugagadores = new Array();
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = jugadores[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var jugador = _step.value;
              jugagadores.push(jugador);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          jugagadores = jugagadores.sort(function (n1, n2) {
            return n2[1] - n1[1];
          });
          return jugagadores;
        }
      }]);

      return JuegoComponent;
    }();

    JuegoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-juego',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./juego.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/juego/juego.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./juego.component.scss */
      "./src/app/paginas/juego/juego.component.scss")).default]
    })], JuegoComponent);
    /***/
  },

  /***/
  "./src/app/paginas/pokemon-rest/pokemon-rest.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/paginas/pokemon-rest/pokemon-rest.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPaginasPokemonRestPokemonRestComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvcG9rZW1vbi1yZXN0L3Bva2Vtb24tcmVzdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/paginas/pokemon-rest/pokemon-rest.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/paginas/pokemon-rest/pokemon-rest.component.ts ***!
    \****************************************************************/

  /*! exports provided: PokemonRestComponent */

  /***/
  function srcAppPaginasPokemonRestPokemonRestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PokemonRestComponent", function () {
      return PokemonRestComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_model_pokemon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/model/pokemon */
    "./src/app/model/pokemon.ts");
    /* harmony import */


    var src_app_services_pokemon_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/pokemon.service */
    "./src/app/services/pokemon.service.ts");

    var PokemonRestComponent =
    /*#__PURE__*/
    function () {
      function PokemonRestComponent(pokemonService) {
        _classCallCheck(this, PokemonRestComponent);

        this.pokemonService = pokemonService;
        console.trace('constructor PokemonRestComponent');
        this.pokemon = new src_app_model_pokemon__WEBPACK_IMPORTED_MODULE_2__["Pokemon"]();
        console.debug(this.pokemon);
        this.mensaje = 'Hola';
        this.nombrePokemon = 'raichu';
      }

      _createClass(PokemonRestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.trace('ngOnInit PokemonRestComponent'); // llamadas a los servicios
          // a un observable nos tenemos que suscribir
          // cuando llamamos a un Observable tenemos 3 posible metodos
          // solo 1 es obligatorio.

          this.getPokemon();
        }
      }, {
        key: "getPokemon",
        value: function getPokemon() {
          var _this4 = this;

          this.pokemonService.getPokemon(this.nombrePokemon).subscribe(function (data) {
            console.debug('peticion correcta data %o', data);
            _this4.pokemon.id = data.id;
            _this4.pokemon.nombre = data.name;
            _this4.pokemon.imagen = data.sprites.front_default;
            _this4.pokemon.habilidades = [];
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = data.abilities[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var ability = _step2.value;

                _this4.getHabilidad(ability.ability.name);
              } //this.getHabilidad(data.abilities[0].ability.name);

            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          }, function (error) {
            console.warn('peticion erronea data %o', error);
            _this4.pokemon.id = error.status;
            _this4.pokemon.nombre = error.statusText;
            _this4.pokemon.imagen = 'https://www.alfabetajuega.com/wp-content/uploads/2019/08/fanart-pokeball-interior-e1566472645874.jpg';
          }, function () {
            console.trace('esto se hace siempre');
          });
        }
      }, {
        key: "getHabilidad",
        value: function getHabilidad(nombre) {
          var _this5 = this;

          this.pokemonService.getHabilidad(nombre).subscribe(function (data) {
            console.debug(data);
            var habilidad = data.names.find(function (el) {
              return el.language.name === 'es';
            });

            _this5.pokemon.habilidades.push(habilidad.name);
          }, function (error) {
            console.debug(error);
            return '';
          });
        }
      }]);

      return PokemonRestComponent;
    }();

    PokemonRestComponent.ctorParameters = function () {
      return [{
        type: src_app_services_pokemon_service__WEBPACK_IMPORTED_MODULE_3__["PokemonService"]
      }];
    };

    PokemonRestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pokemon-rest',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pokemon-rest.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/pokemon-rest/pokemon-rest.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pokemon-rest.component.scss */
      "./src/app/paginas/pokemon-rest/pokemon-rest.component.scss")).default]
    })], PokemonRestComponent);
    /***/
  },

  /***/
  "./src/app/paginas/recetas/recetas.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/paginas/recetas/recetas.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPaginasRecetasRecetasComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".item-receta {\n  display: -webkit-box;\n  display: flex;\n}\n.item-receta .receta {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n.item-receta:hover {\n  background-color: #cc9c38;\n}\n.gluten i {\n  color: red;\n}\n.receta-detalle {\n  border: 2px solid #a67e2b;\n}\n.receta-detalle .titulo {\n  padding-left: 0.5rem;\n  color: white;\n  background-color: #a67e2b;\n}\n.imagen-receta {\n  margin: auto;\n  position: relative;\n  display: inline-block;\n}\n.imagen-receta img {\n  display: inline-block;\n  -o-object-fit: scale-down;\n     object-fit: scale-down;\n  border-radius: 10px;\n}\n.imagen-receta span.gluten {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  font-size: 1.5rem;\n}\n.receta-titulo {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.pie-foto {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.pie-foto .corazon {\n  color: red;\n}\n.list-group-item.active {\n  background-color: #a67e2b;\n  border-color: #a67e2b;\n}\n.list-group-item.active .text-muted {\n  color: white !important;\n}\n.buscador {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.buscador button {\n  border: 1px solid #ced4da;\n  background-color: #ebebeb;\n}\n.buscador button i {\n  color: #313131;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9yZWNldGFzL0M6XFwwMzk2XFxteS1hcHAvc3JjXFxhcHBcXHBhZ2luYXNcXHJlY2V0YXNcXHJlY2V0YXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2luYXMvcmVjZXRhcy9yZWNldGFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0FDREY7QURFRTtFQUNFLG1CQUFBO1VBQUEsWUFBQTtBQ0FKO0FERUU7RUFDRSx5QkFBQTtBQ0FKO0FESUE7RUFDRSxVQUFBO0FDREY7QURLQTtFQUNFLHlCQUFBO0FDRkY7QURHRTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQXRCTztBQ3FCWDtBREtBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNGRjtBREdFO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO0VBQ0EsbUJBQUE7QUNESjtBREdFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDREo7QURLQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0ZGO0FES0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDRkY7QURHRTtFQUNFLFVBQUE7QUNESjtBREtBO0VBQ0UseUJBekRTO0VBMERULHFCQTFEUztBQ3dEWDtBREdFO0VBQ0UsdUJBQUE7QUNESjtBRE1BO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDSEY7QURJRTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7QUNGSjtBREdJO0VBQ0EsY0FBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hcy9yZWNldGFzL3JlY2V0YXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeSA6ICNhNjdlMmI7XHJcblxyXG4uaXRlbS1yZWNldGF7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAucmVjZXRhIHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICB9XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRwcmltYXJ5LCAxMCUpO1xyXG4gIH1cclxufVxyXG5cclxuLmdsdXRlbiBpIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5cclxuLnJlY2V0YS1kZXRhbGxlIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAkcHJpbWFyeTtcclxuICAudGl0dWxvIHtcclxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XHJcbiAgfVxyXG59XHJcblxyXG4uaW1hZ2VuLXJlY2V0YSB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaW1nIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICBzcGFuLmdsdXRlbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDFyZW07XHJcbiAgICByaWdodDogMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLnJlY2V0YS10aXR1bG8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnBpZS1mb3RvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAuY29yYXpvbiB7XHJcbiAgICBjb2xvcjogcmVkXHJcbiAgfVxyXG59XHJcblxyXG4ubGlzdC1ncm91cC1pdGVtLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XHJcbiAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeTtcclxuICAudGV4dC1tdXRlZCB7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4uYnVzY2Fkb3Ige1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBidXR0b24ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XHJcbiAgICBpe1xyXG4gICAgY29sb3I6IHJnYig0OSwgNDksIDQ5KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLml0ZW0tcmVjZXRhIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5pdGVtLXJlY2V0YSAucmVjZXRhIHtcbiAgZmxleC1ncm93OiAxO1xufVxuLml0ZW0tcmVjZXRhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjOWMzODtcbn1cblxuLmdsdXRlbiBpIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnJlY2V0YS1kZXRhbGxlIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2E2N2UyYjtcbn1cbi5yZWNldGEtZGV0YWxsZSAudGl0dWxvIHtcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E2N2UyYjtcbn1cblxuLmltYWdlbi1yZWNldGEge1xuICBtYXJnaW46IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmltYWdlbi1yZWNldGEgaW1nIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmltYWdlbi1yZWNldGEgc3Bhbi5nbHV0ZW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMXJlbTtcbiAgcmlnaHQ6IDFyZW07XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4ucmVjZXRhLXRpdHVsbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5waWUtZm90byB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5waWUtZm90byAuY29yYXpvbiB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E2N2UyYjtcbiAgYm9yZGVyLWNvbG9yOiAjYTY3ZTJiO1xufVxuLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmUgLnRleHQtbXV0ZWQge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmJ1c2NhZG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5idXNjYWRvciBidXR0b24ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xufVxuLmJ1c2NhZG9yIGJ1dHRvbiBpIHtcbiAgY29sb3I6ICMzMTMxMzE7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/paginas/recetas/recetas.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/paginas/recetas/recetas.component.ts ***!
    \******************************************************/

  /*! exports provided: RecetasComponent */

  /***/
  function srcAppPaginasRecetasRecetasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecetasComponent", function () {
      return RecetasComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_mocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/mocks */
    "./src/app/mocks.ts");

    var RecetasComponent =
    /*#__PURE__*/
    function () {
      function RecetasComponent() {
        _classCallCheck(this, RecetasComponent);

        console.trace('RecetasComponent constructor');
        this.recetas = src_app_mocks__WEBPACK_IMPORTED_MODULE_2__["RECETAS"];
        this.receta = this.recetas[2];
        this.sinGluten = false;
        this.criterio = '';
      } // constructor


      _createClass(RecetasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.trace('RecetasComponent ngOnInit');
        } // ngOnInit

      }, {
        key: "setReceta",
        value: function setReceta(receta) {
          console.trace('setReceta');
          this.receta = receta;
        }
      }]);

      return RecetasComponent;
    }();

    RecetasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-recetas',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./recetas.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/recetas/recetas.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./recetas.component.scss */
      "./src/app/paginas/recetas/recetas.component.scss")).default]
    })], RecetasComponent);
    /***/
  },

  /***/
  "./src/app/pipes/animales.pipe.ts":
  /*!****************************************!*\
    !*** ./src/app/pipes/animales.pipe.ts ***!
    \****************************************/

  /*! exports provided: AnimalesPipe */

  /***/
  function srcAppPipesAnimalesPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimalesPipe", function () {
      return AnimalesPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AnimalesPipe =
    /*#__PURE__*/
    function () {
      function AnimalesPipe() {
        _classCallCheck(this, AnimalesPipe);
      }

      _createClass(AnimalesPipe, [{
        key: "transform",
        value: function transform(datos, busqueda, tipoBusqueda) {
          console.debug(datos);
          console.debug(busqueda);
          busqueda = busqueda === undefined ? undefined : busqueda.toUpperCase().trim();
          tipoBusqueda = tipoBusqueda === undefined || tipoBusqueda === 'todos' ? undefined : tipoBusqueda.toUpperCase();
          var resultado = datos.filter(function (el) {
            var nombre = el.Nombre.toUpperCase();
            var tipo = el.Tipo.toUpperCase();
            console.log(tipoBusqueda, busqueda);

            if (!tipoBusqueda && !busqueda) {
              return true;
            } else if (!busqueda) {
              return tipo === tipoBusqueda;
            } else if (!tipoBusqueda) {
              return nombre.includes(busqueda);
            } else {
              return nombre.includes(busqueda) && tipo === tipoBusqueda;
            }
          });
          return resultado;
        }
      }]);

      return AnimalesPipe;
    }();

    AnimalesPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'animalesFiltro'
    })], AnimalesPipe);
    /***/
  },

  /***/
  "./src/app/pipes/receta-filtro.pipe.ts":
  /*!*********************************************!*\
    !*** ./src/app/pipes/receta-filtro.pipe.ts ***!
    \*********************************************/

  /*! exports provided: RecetaFiltroPipe */

  /***/
  function srcAppPipesRecetaFiltroPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecetaFiltroPipe", function () {
      return RecetaFiltroPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RecetaFiltroPipe =
    /*#__PURE__*/
    function () {
      function RecetaFiltroPipe() {
        _classCallCheck(this, RecetaFiltroPipe);
      }

      _createClass(RecetaFiltroPipe, [{
        key: "transform",

        /**
         * Dadas unas recetas la filtra si contienen un cocinero, un nombre o
         * un ingrediente que coincida con el criterio de busqueda. Si se selecciona
         * sin gluten devolvera todas las recetas que no tengan gluten
         * @param recetas que se desean filtrar
         * @param criterioBusqueda por el que se filtraran las recetas
         * @param sinGluten si se desea que todas las recetas sean sin gluten o no
         */
        value: function transform(recetas, criterioBusqueda, sinGluten) {
          if (!criterioBusqueda) {
            criterioBusqueda = '';
          }

          var resultado = new Array();
          criterioBusqueda = criterioBusqueda.toUpperCase();

          if (sinGluten) {
            recetas = recetas.filter(function (el) {
              return el.isGlutenFree;
            });
          }

          resultado = recetas.filter(function (el) {
            var valido = false;
            valido = valido || el.nombre.toUpperCase().includes(criterioBusqueda);
            valido = valido || el.cocinero.toUpperCase().includes(criterioBusqueda);
            valido = valido || el.ingredientes.some(function (el) {
              return el.toUpperCase().includes(criterioBusqueda);
            });
            return valido;
          });
          return resultado;
        }
      }]);

      return RecetaFiltroPipe;
    }();

    RecetaFiltroPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'recetaFiltro'
    })], RecetaFiltroPipe);
    /***/
  },

  /***/
  "./src/app/services/pokemon.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/pokemon.service.ts ***!
    \*********************************************/

  /*! exports provided: PokemonService */

  /***/
  function srcAppServicesPokemonServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PokemonService", function () {
      return PokemonService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var PokemonService =
    /*#__PURE__*/
    function () {
      function PokemonService(http) {
        _classCallCheck(this, PokemonService);

        this.http = http;
        console.trace('PokemonService constructor');
      }

      _createClass(PokemonService, [{
        key: "getHabilidad",
        value: function getHabilidad(nombre) {
          var url = "https://pokeapi.co/api/v2/ability/".concat(nombre.toLowerCase());
          console.trace('PokemonService' + url);
          return this.http.get(url);
        }
      }, {
        key: "getPokemon",
        value: function getPokemon(nombre) {
          var url = "https://pokeapi.co/api/v2/pokemon/".concat(nombre.toLowerCase());
          console.trace('PokemonService' + url);
          return this.http.get(url);
        }
      }, {
        key: "getAll",
        value: function getAll() {
          throw new Error('Method not implemented');
        }
      }, {
        key: "getById",
        value: function getById(id) {
          var url = 'https://pokeapi.co/api/v2/pokemon/' + id + '/';
          console.trace('PokemonService' + url);
          return this.http.get(url);
        }
      }, {
        key: "getByName",
        value: function getByName(nombre) {
          throw new Error('Method not implemented');
        }
      }]);

      return PokemonService;
    }();

    PokemonService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    PokemonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PokemonService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\0396\my-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map