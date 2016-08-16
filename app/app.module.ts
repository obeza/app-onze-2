import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

/* import angular2-material */
/*
import { MdCardModule } from '@angular2-material/card';
import { MdButtonModule } from '@angular2-material/button';
import { MdProgressCircleModule } from '@angular2-material/progress-circle';
import { MdCheckboxModule } from '@angular2-material/checkbox';
import { MdIconModule } from '@angular2-material/icon';
import { MdInputModule } from '@angular2-material/input';
import { MdListModule } from '@angular2-material/list';
import { MdRadioModule } from '@angular2-material/radio';
import { MdToolbarModule } from '@angular2-material/toolbar';
*/
/* import mes services */
import { SondagesService } from './services/sondages.service';
import { routing } from './app.routing';

/* import mes component */
import { SondagesComponent } from './sondages/sondages.component';
import { SondageAjouterComponent } from './sondage-ajouter/sondage-ajouter.component';
import { LoginComponent } from './login/login.component';
import { SondagesModifierComponent } from './sondages-modifier/sondages-modifier.component';

@NgModule({
  declarations: [
    AppComponent,
    SondagesComponent,
    LoginComponent,
    SondagesModifierComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    /*
    MdButtonModule, MdCardModule, MdProgressCircleModule, MdCheckboxModule,
    MdIconModule, MdInputModule, MdListModule, MdRadioModule, MdToolbarModule,
    */
    HttpModule, routing
  ],
  providers: [
     SondagesService
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
