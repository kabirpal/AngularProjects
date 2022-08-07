import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ServicesComponent } from './services/services.component';
import { ObservablesComponent } from './observables/observables.component';
import { HomeComponent } from './home/home.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { FormsModule } from '@angular/forms';
import { UserDetailsComponent } from './services/user-details/user-details.component';
import { UserServiceService } from './services/user-service.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PropertyBindingComponent,
    ServicesComponent,
    ObservablesComponent,
    HomeComponent,
    ErrorHandlingComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
