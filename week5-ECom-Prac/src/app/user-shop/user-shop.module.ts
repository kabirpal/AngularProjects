import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { UserShopComponent } from './user-shop.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from './carousel/carousel.component';
import { CardsComponent } from './cards/cards.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductsModule } from '../products/products.module';
import { HeaderComponent } from './header/header.component';
import { ToasterComponent } from '../TosterComponent/toaster/toaster.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from './error404/error404.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    AboutUsComponent,
    UserShopComponent,
    FooterComponent,
    CarouselComponent,
    CardsComponent,
    CheckoutComponent,
    HeaderComponent,
    Error404Component,
  ],
  imports: [CommonModule, FormsModule, ProductsModule, RouterModule],
  exports: [FooterComponent, HeaderComponent],
})
export class UserShopModule {}
