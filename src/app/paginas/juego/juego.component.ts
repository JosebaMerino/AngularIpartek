import { Component, OnInit } from '@angular/core';
import { MyjsonService } from 'src/app/services/myjson.service';
import { debug } from 'util';

const TIEMPO_JUEGO = 2000;
const TIEMPO_EMPIECE = 1000;

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss']
})
export class JuegoComponent implements OnInit {

  puntos: number;
  jugador: string;
  enJuego: boolean;
  puedeJugar: boolean;
  jugadores: Map<string, number>;


  constructor(private myjsonService: MyjsonService) {
    this.puntos = 0;
    this.enJuego = false;
    this.puedeJugar = true;
    this.jugador = '';
    this.jugadores = new Map<string, number>();
    this.jugadores.set('Jugador', 2);
   } // constructor

  ngOnInit() {
    this.myjsonService.getJugadores().subscribe((jugadores) => {
      this.jugadores = jugadores;
    });
  }

  contar() {
    this.puntos ++;
  }

  jugar() {
    this.puedeJugar = false;
    setTimeout(() => {
      this.enJuego = true;
    }
    , TIEMPO_EMPIECE);
    setTimeout(() => { this.finJuego(); }, TIEMPO_JUEGO + TIEMPO_EMPIECE);
  }

  finJuego() {
    this.enJuego = false;

    let jugador = {
      nombre: this.jugador,
      puntos: this.puntos
    }

    this.myjsonService.getJugadores().subscribe((jugadores)=> {
      let jugadoresMAP = new Map<string,number>(jugadores);
      this.myjsonService.putJugadores(jugador, jugadoresMAP).subscribe((dato) => {
        this.jugadores = dato;
      });
    })


    this.puntos = 0;
    this.puedeJugar = true;
  }

  mostrarJugadores() {
    let jugadores = this.jugadores.entries();
    let jugagadores = new Array<[string, number]>();

    for (const jugador of jugadores) {
      jugagadores.push(jugador);
    }
    jugagadores = jugagadores.sort((n1, n2) =>  n2[1][1] - n1[1][1]);

    return jugagadores;
  }
}
