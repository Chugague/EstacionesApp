import { Component, Input, OnInit } from '@angular/core';
import { Estacion } from '../../interfaces/estacion.interface';

@Component({
  selector: 'estacion-tarjeta',
  templateUrl: './tarjeta.component.html',
  styles: ``
})
export class TarjetaComponent implements OnInit{

  @Input()
  public estacion!: Estacion;

  ngOnInit(): void {
    if (!this.estacion) throw new Error('Se necesita una estación para poder mostrar la tarjeta.');
  }
}
