import { Pipe, type PipeTransform } from '@angular/core';
import { Estacion } from '../interfaces/estacion.interface';

@Pipe({
  name: 'ImagenEstacion',
})
export class ImagenEstacionPipe implements PipeTransform {

  transform(estacion: Estacion): string {

    if ( !estacion.id && !estacion.alt_img ) {
      return 'assets/radio.jpg';
    }

    if( estacion.alt_img===""){
      return 'assets/radio.jpg';
    
    }

    if ( estacion.alt_img ) {
      return estacion.alt_img;
    } else {
      return `assets/estaciones/${ estacion.nombre }.jpg`;
    }
  }

}
