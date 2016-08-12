import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MdCardModule } from '@angular2-material/card';
import { MdButtonModule } from '@angular2-material/button';
import { MdProgressCircleModule } from '@angular2-material/progress-circle';

import { SondagesComponent } from './sondages/sondages.component';
import { SondageAjouterComponent } from './sondage-ajouter/sondage-ajouter.component';

import { HttpModule } from '@angular/http';

import { MoviesService } from './services/movies.service';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    SondagesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    MdButtonModule, MdCardModule, MdProgressCircleModule,
    HttpModule, routing
  ],
  providers: [
     MoviesService
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
