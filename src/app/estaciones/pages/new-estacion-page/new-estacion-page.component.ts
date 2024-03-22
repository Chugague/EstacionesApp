import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { filter, switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { EstacionesService } from '../../services/estaciones.service';
import { Estacion } from '../../interfaces/estacion.interface';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-new-estacion-page',
  templateUrl: './new-estacion-page.component.html',
  styles: ``
})
export class NuevaEstacionPageComponent implements OnInit{

  public estacionForm = new FormGroup({
    id:         new FormControl<number>(0, ),
    nombre:     new FormControl<string>('', [Validators.required, Validators.maxLength(200)] ),
    frecuencia: new FormControl<number>(99.9,),
    premium:    new FormControl<boolean>(false),
    valoracion: new FormControl(1, [Validators.min(1), Validators.max(5)]),
    alt_img:   new FormControl<string>(''),
    fecha:      new FormControl<string>('', [Validators.required] ),
  });

  constructor(
    private estacionesService: EstacionesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    ){}

  get datosFormulario(): Estacion {
    const estacion = this.estacionForm.value as Estacion;
    return estacion;
  }

  ngOnInit(): void {
    if ( !this.router.url.includes('editar')) return;

    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.estacionesService.getEstacionPorId(id)),
    ).subscribe(estacion =>{
      if (!estacion){
        return this.router.navigate(['/estaciones/list']);
      }

      this.estacionForm.reset(estacion);
      return;
    })

  }

  onSubmit():void {
    if( this.estacionForm.invalid ) return;

    if( this.datosFormulario.id ){
      this.estacionesService.actualizarEstacion( this.datosFormulario )
      .subscribe( resp =>{
        this.showSnackBar('Estacion actualizada');
      });
      return;
    }

    this.estacionesService.crearEstacion( this.datosFormulario )
    .subscribe( resp =>{
      this.router.navigate(['/estaciones/lista']);
      this.showSnackBar('Estacion creada');
    });
  }

  onCancelar(): void {
    this.router.navigate(['/estaciones/lista']);
    this.showSnackBar('Operacion cancelada');
  }

  onBorrar(): void {
    const dialog = this.dialog.open(ConfirmarComponent, {
      data: this.estacionForm.value
    });

    dialog.afterClosed()
    .pipe(
      filter((result: boolean) => result),
      switchMap(() => this.estacionesService.borrarEstacion(this.datosFormulario.id)),
      filter((result: boolean) => result),
    ).subscribe(() => {
      this.showSnackBar('Estacion eliminada');
      this.router.navigate(['/estaciones/lista']);
    }
    )
  }


  showSnackBar( mensaje: string ): void {
    this.snackBar.open( mensaje, 'ok!', {
      duration: 2500
    });
  }

}
