import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { ServicesService } from './services.service';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentlistComponent,
    StudentdetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent,StudentdetailsComponent]
})
export class AppModule { }
