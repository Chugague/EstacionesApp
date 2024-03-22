import { Component, OnInit } from '@angular/core';
import { Estacion } from '../../interfaces/estacion.interface';
import { EstacionesService } from '../../services/estaciones.service';

@Component({
  selector: 'app-estaciones-page',
  templateUrl: './estaciones-page.component.html',
  styles: ``
})
export class EstacionesPageComponent implements OnInit{

  public estaciones: Estacion[] = [];

  constructor( private estacionesService: EstacionesService ) { }

  ngOnInit(): void {
    this.estacionesService.getEstaciones()
      .subscribe( estaciones => this.estaciones = estaciones );
  }
}
