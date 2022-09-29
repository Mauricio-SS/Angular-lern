import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitlesComponent } from './titles/titles.component';
import  {FormsModule, NgModel} from '@angular/forms';
import { DirectivaComponent } from './directiva/directiva.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { PipesComponent } from './pipes/pipes.component';
import { TextFormatPipe } from './text-format.pipe';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TitlesComponent,
    DirectivaComponent,
    EjemploComponent,
    PipesComponent,
    TextFormatPipe,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
