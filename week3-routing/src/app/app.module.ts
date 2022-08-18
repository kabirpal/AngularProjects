import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { ServerComponent } from './server/server.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { LogInComponent } from './auth/log-in/log-in.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthModule } from './auth/auth.module';

const appRoutes:Routes = [
  {path:'', component:HomeComponent},
  {path:'users',component:UsersComponent},
  {path:'server',component:ServerComponent},
  {path:'login',component:LogInComponent},
  {path:'register',component:RegisterComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomeComponent,
    ServerComponent,
    LogInComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
   // AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    AdminModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
