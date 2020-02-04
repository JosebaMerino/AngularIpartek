export class Pokemon {
    private _id: number;
    private _imagen: string;
    private _nombre: string;
    private _habilidades: Array<string>;

    constructor(
        id: number = 25,
        imagen: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
        nombre: string = 'Pikachu',
        ) {
        this.nombre = nombre;
        this.id = id;
        this.imagen = imagen;
    }
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }

    public get imagen(): string {
        return this._imagen;
    }
    public set imagen(value: string) {
        this._imagen = value;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get habilidades(): Array<string> {
        return this._habilidades;
    }
    public set habilidades(value: Array<string>) {
        this._habilidades = value;
    }

}
