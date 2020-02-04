import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss']
})
export class JuegoComponent implements OnInit {

  puntos: number;
  jugador: string;
  enJuego: boolean;
  jugadores: Map<string, number>;

  constructor() {
    this.puntos = 0;
    this.enJuego = false;
    this.jugador = '';
    this.jugadores = new Map<string, number>();
    this.jugadores.set('Jugador', 2);
   } // constructor

  ngOnInit() {
  }

  contar() {
    this.puntos ++;
  }

  jugar() {
    setTimeout(() => this.enJuego = true, 1000)
    setTimeout(() => { this.finJuego(); }, 3000);
  }

  finJuego() {
    this.enJuego = false;
    this.jugadores.set(this.jugador, this.puntos);

    this.puntos = 0;
  }

  mostrarJugadores() {
    let jugadores = this.jugadores.entries();
    let jugagadores = new Array<[string, number]>();

    for(const jugador of jugadores) {
      jugagadores.push(jugador);
    }
    jugagadores = jugagadores.sort((n1, n2) =>  n2[1] - n1[1]);

    return jugagadores;
  }
}
