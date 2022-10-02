import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEs, 'es');

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitlesComponent } from './titles/titles.component';
import  {FormsModule, NgModel} from '@angular/forms';
import { DirectivaComponent } from './directiva/directiva.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { PipesComponent } from './pipes/pipes.component';
import { TextFormatPipe } from './text-format.pipe';
import { ErrorPageComponent } from './error-page/error-page.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AgregarUsuariosComponent } from './usuarios/agregar-usuarios/agregar-usuarios.component';
import { ActualizarUsuariosComponent } from './usuarios/actualizar-usuarios/actualizar-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    TitlesComponent,
    DirectivaComponent,
    EjemploComponent,
    PipesComponent,
    TextFormatPipe,
    ErrorPageComponent,
    EncabezadoComponent,
    UsuariosComponent,
    AgregarUsuariosComponent,
    ActualizarUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ {provide : LOCALE_ID, useValue : 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
