import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { UserShopComponent } from './user-shop.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from './carousel/carousel.component';
import { CardsComponent } from './cards/cards.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductsModule } from '../products/products.module';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    AboutUsComponent,
    UserShopComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    CardsComponent,
    CheckoutComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductsModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent
  ]
})
export class UserShopModule { }
