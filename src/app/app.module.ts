import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlideToggleModule } from 'ngx-slide-toggle';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
