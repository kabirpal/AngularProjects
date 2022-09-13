import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserShopModule } from './user-shop/user-shop.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductsModule } from './products/products.module';
import { AdminModule } from './admin/admin.module';
import { ProductsPipe } from './products/productFilter.pipe';
import { AuthGuard } from './auth.guard';
import { ToasterComponent } from './TosterComponent/toaster/toaster.component';
import { ToastComponent } from './TosterComponent/toast/toast.component';
import { SpinnerComponent } from './products/spinner/spinner.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductsPipe,
    ToasterComponent,
    ToastComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserShopModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProductsModule,
    HttpClientModule,
    AdminModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
