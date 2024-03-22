import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstacionesRoutingModule } from './estaciones-routing.module';
import { MaterialModule } from '../material/material.module';

import { EstacionPageComponent } from './pages/estacion-page/estacion-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { EstacionesPageComponent } from './pages/estaciones-page/estaciones-page.component';
import { NuevaEstacionPageComponent } from './pages/new-estacion-page/new-estacion-page.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { ImagenEstacionPipe } from './pipes/imagenEstacion.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';


@NgModule({
  declarations: [
    EstacionPageComponent,
    LayoutPageComponent,
    EstacionesPageComponent,
    NuevaEstacionPageComponent,
    TarjetaComponent,

    //Pipes
    ImagenEstacionPipe,
      ConfirmarComponent,
  ],
  imports: [
    CommonModule,
    EstacionesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class EstacionesModule { }
