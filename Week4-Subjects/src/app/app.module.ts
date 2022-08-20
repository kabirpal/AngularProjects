import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Mirror1Component } from './mirror1/mirror1.component';
import { Mirror2Component } from './mirror2/mirror2.component';
import { Mirror3Component } from './mirror3/mirror3.component';
import { Mirror4Component } from './mirror4/mirror4.component';
import { Mirror5Component } from './mirror5/mirror5.component';
import { Mirror6Component } from './mirror6/mirror6.component';
import { Mirror7Component } from './mirror7/mirror7.component';
import { Mirror8Component } from './mirror8/mirror8.component';
import { Mirror9Component } from './mirror9/mirror9.component';
import { ReplayComponent } from './replay/replay.component';

@NgModule({
  declarations: [
    AppComponent,
    Mirror1Component,
    Mirror2Component,
    Mirror3Component,
    Mirror4Component,
    Mirror5Component,
    Mirror6Component,
    Mirror7Component,
    Mirror8Component,
    Mirror9Component,
    ReplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
