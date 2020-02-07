export class Pokemon {
    constructor(id = 25, imagen = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png', nombre = 'Pikachu') {
        this.nombre = nombre;
        this.id = id;
        this.imagen = imagen;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }
    get imagen() {
        return this._imagen;
    }
    set imagen(value) {
        this._imagen = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
}
//# sourceMappingURL=pokemon.js.map