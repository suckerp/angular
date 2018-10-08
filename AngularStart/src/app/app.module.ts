import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { 
  AppComponent, 
  HalloComponent, 
  StringInterpolationComponent, 
  PropertyBindingComponent 
} from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HalloComponent,
    StringInterpolationComponent,
    PropertyBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
