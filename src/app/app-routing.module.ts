import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivaComponent } from './directiva/directiva.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PipesComponent } from './pipes/pipes.component';
import { TitlesComponent } from './titles/titles.component';

const routes: Routes = [
  { path : '', component: TitlesComponent},
  { path : 'ejemplo', component: EjemploComponent},
  { path : 'directiva', component: DirectivaComponent},
  { path : 'pipe', component: PipesComponent},
  { path : '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
