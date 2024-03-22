import { Component, OnInit } from '@angular/core';
import { EstacionesService } from '../../services/estaciones.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Estacion } from '../../interfaces/estacion.interface';

@Component({
  selector: 'app-estacion-page',
  templateUrl: './estacion-page.component.html',
  styles: ``
})
export class EstacionPageComponent implements OnInit{

  public estacion?: Estacion;

  constructor(
    private estacionService: EstacionesService,
    private activatedRoute: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.estacionService.getEstacionPorId(id) )
      ).subscribe( estacion => {
        if ( !estacion ) return this.router.navigateByUrl('/estaciones');
        this.estacion = estacion;
        return;
      });
  }
}
