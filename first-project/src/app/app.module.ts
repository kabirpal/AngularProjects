import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ServerCompomnent } from './server/server.component';
import { SuccessAlert } from './SuccessAlert/SuccessAlert.component';
import { WarningAlertComponent } from './WarningAlert/WarningAlert.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ServerCompomnent,
    WarningAlertComponent,
    SuccessAlert
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
