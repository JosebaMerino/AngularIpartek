import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let BotonComponent = class BotonComponent {
    constructor() {
        this.pulsado = () => {
            this.numero += this.incremento;
            if (this.numero == 0) {
                this.incremento = 1;
            }
            if (this.numero >= 10) {
                this.incremento = -1;
            }
        };
        this.numero = 0;
        this.incremento = 1;
    }
    ngOnInit() {
    }
};
BotonComponent = tslib_1.__decorate([
    Component({
        selector: 'app-boton',
        templateUrl: './boton.component.html',
        styleUrls: ['./boton.component.scss']
    })
], BotonComponent);
export { BotonComponent };
//# sourceMappingURL=boton.component.js.map