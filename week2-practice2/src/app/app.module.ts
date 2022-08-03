import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl } from '@angular/forms'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormControl
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
