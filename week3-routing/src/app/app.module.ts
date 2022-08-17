import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { ServerComponent } from './server/server.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';

const appRoutes:Routes = [
  {path:'', component:HomeComponent},
  {path:'users',component:UsersComponent},
  {path:'server',component:ServerComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomeComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
   // AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
