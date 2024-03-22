import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Estacion } from '../interfaces/estacion.interface';
import { environments } from '../../../environments/environments';

@Injectable({providedIn: 'root'})
export class EstacionesService {

  private baseUrl:string = environments.baseUrl;

  constructor(private http: HttpClient) { }

  getEstaciones(): Observable<Estacion[]> {
    return this.http.get<Estacion[]>(`${this.baseUrl}/estaciones`);
  }

  getEstacionPorId(id: string): Observable<Estacion | undefined> {
    return this.http.get<Estacion>(`${this.baseUrl}/estaciones/${id}`)
    .pipe(
      catchError(err => {
        console.log('HTTP Error', err);
        return of(undefined);
      })
    );
  }

  crearEstacion(estacion: Estacion): Observable<Estacion> {
    return this.http.post<Estacion>(`${this.baseUrl}/estaciones`, estacion);
  }

  actualizarEstacion(estacion: Estacion): Observable<Estacion> {
    if (!estacion.id) throw new Error('No se puede actualizar una estación sin id');
    return this.http.patch<Estacion>(`${this.baseUrl}/estaciones/${estacion.id}`, estacion);
  }

  borrarEstacion(id: number): Observable<boolean> {
    return this.http.delete(`${this.baseUrl}/estaciones/${id}`)
    .pipe(
      map(resp => true),
      catchError(err => {
        console.log('HTTP Error', err);
        return of(false)
      }))
    };
}
