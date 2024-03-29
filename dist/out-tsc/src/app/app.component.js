import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
// componenete principal que se carga al arrancar la app
/*
selector:   nombre de la etiqueta para inyectar el componente en HTML
templateURL:  Vista del HTML
styleUrls:  Estilo para la vista formato SCSS
*/
let AppComponent = class AppComponent {
    // componenete principal que se carga al arrancar la app
    /*
    selector:   nombre de la etiqueta para inyectar el componente en HTML
    templateURL:  Vista del HTML
    styleUrls:  Estilo para la vista formato SCSS
    */
    constructor() {
        // variable
        this.title = 'my-app';
        this.productos = [{
                "id": 34,
                "nombre": "cafe",
                "imagen": "https://www.stickpng.com/assets/images/580b57fbd9996e24bc43c0f0.png",
                "gluten": false,
                "categoria": {
                    "id": 1,
                    "nombre": "bebidas"
                },
                "historico": [{
                        "fecha": "17/01/2020",
                        "precio": 1.45
                    },
                    {
                        "fecha": "19/01/2020",
                        "precio": 1.40
                    }, {
                        "fecha": "20/01/2020",
                        "precio": 9.0
                    }
                ]
            },
            {
                "id": 31,
                "nombre": "leche",
                "imagen": "https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c1c6.png",
                "gluten": false,
                "categoria": {
                    "id": 1,
                    "nombre": "bebidas"
                },
                "historico": [{
                        "fecha": "17/01/2020",
                        "precio": 95
                    },
                    {
                        "fecha": "19/01/2020",
                        "precio": 9.40
                    }, {
                        "fecha": "20/01/2020",
                        "precio": 98.0
                    }
                ]
            },
            {
                "id": 33,
                "nombre": "galletas",
                "imagen": "https://www.stickpng.com/assets/images/580b57fbd9996e24bc43c0f7.png",
                "gluten": true,
                "categoria": {
                    "id": 2,
                    "nombre": "desayuno"
                },
                "historico": [{
                        "fecha": "17/01/2020",
                        "precio": 18.45
                    },
                    {
                        "fecha": "19/01/2020",
                        "precio": 17.40
                    }, {
                        "fecha": "20/01/2020",
                        "precio": 96.0
                    }
                ]
            }
        ];
        this.pSeleccionado = this.productos[0];
        this.carro = new Map();
        this.productoSeleccionado = (producto) => {
            console.trace(producto);
            this.pSeleccionado = producto;
        };
    }
    anadirCarro(producto) {
        let id = producto.id;
        if (this.carro.has(id)) {
            let c = this.carro.get(id);
            c++;
            this.carro.set(id, c);
        }
        else {
            this.carro.set(id, 1);
        }
        console.trace(this.carro);
    }
    getCarro() {
        const arrayCarro = [];
        for (const entry of this.carro.entries()) {
            arrayCarro.push({ 1: entry[0], 2: entry[1] });
        }
        return arrayCarro;
    }
    getProducto(id) {
        let producto;
        this.productos.forEach(element => {
            if (element.id === id) {
                producto = element;
            }
        });
        return producto;
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map