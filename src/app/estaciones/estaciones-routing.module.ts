import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NuevaEstacionPageComponent } from './pages/new-estacion-page/new-estacion-page.component';
import { EstacionPageComponent } from './pages/estacion-page/estacion-page.component';
import { EstacionesPageComponent } from './pages/estaciones-page/estaciones-page.component';

const routes: Routes = [
  {
    path:'',
    component: LayoutPageComponent,
    children: [
      { path: 'nueva-estacion', component: NuevaEstacionPageComponent},
      { path: 'editar/:id', component: NuevaEstacionPageComponent},
      { path: 'lista', component: EstacionesPageComponent },
      { path: ':id', component: EstacionPageComponent},
      { path: '**', redirectTo: 'lista'}
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstacionesRoutingModule { }
