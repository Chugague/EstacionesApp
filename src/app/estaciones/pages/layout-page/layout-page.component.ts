import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {

  public barraOpciones = [
    {ruta: './nueva-estacion', icon: 'add', nombre: 'Nueva Estación' },
    {ruta: './lista', icon: 'folder', nombre: 'Estaciones' }

  ];

}
