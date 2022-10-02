import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivaComponent } from './directiva/directiva.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PipesComponent } from './pipes/pipes.component';
import { TitlesComponent } from './titles/titles.component';
import { ActualizarUsuariosComponent } from './usuarios/actualizar-usuarios/actualizar-usuarios.component';
import { AgregarUsuariosComponent } from './usuarios/agregar-usuarios/agregar-usuarios.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  { path : '', component: TitlesComponent},
  { path : 'ejemplo', component: EjemploComponent},
  { path : 'directiva', component: DirectivaComponent},
  { path : 'pipe', component: PipesComponent},
  { path : 'usuarios', component: UsuariosComponent, children : [
    {
      path : 'agregar', component: AgregarUsuariosComponent
    },
    {
      path : 'actualizar', component: ActualizarUsuariosComponent
    }
  ] },
  { path : '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
