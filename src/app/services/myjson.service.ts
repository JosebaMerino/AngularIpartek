import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyjsonService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = 'https://api.myjson.com/bins/1ah3j4';
  }

  getJugadores(): Observable<any> {
    return this.http.get(this.url);
  }

  putJugadores( jugador: any, jugadores : Map<string, number>): Observable<any> {
      jugadores.set(jugador.nombre, jugador.puntos);
      const jugadoresArray = [...jugadores];

      return this.http.put(this.url, jugadoresArray);
  }

}
