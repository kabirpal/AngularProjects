import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { UserShopComponent } from './user-shop.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from './carousel/carousel.component';
import { CardsComponent } from './cards/cards.component';
import { CheckoutComponent } from './checkout/checkout.component';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    CartComponent,
    AboutUsComponent,
    UserShopComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    CardsComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent
  ]
})
export class UserShopModule { }
