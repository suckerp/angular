import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EingabeComponent } from './eingabe/eingabe.component';
import { AusgabeComponent } from './ausgabe/ausgabe.component';
import { ServiceService } from './service.service';

@NgModule({
  declarations: [
    AppComponent,
    EingabeComponent,
    AusgabeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
