import { NgModule } from '@angular/core';
// import { FormControl } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // FormControl
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
