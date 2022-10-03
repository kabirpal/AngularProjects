import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthAdminGuard } from '../auth.admin.guard';
import { AuthGuard } from '../auth.guard';
import { BestSellersComponent } from '../products/best-sellers/best-sellers.component';
import { BooksComponent } from '../products/books/books.component';
import { FashionComponent } from '../products/fashion/fashion.component';
import { MobilesComponent } from '../products/mobiles/mobiles.component';
import { MyCartComponent } from '../products/my-cart/my-cart.component';
import { ViewProductsComponent } from '../products/view-products/view-products.component';
import { WishlistComponent } from '../products/wishlist/wishlist.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bestseller', component: BestSellersComponent },
  { path: 'books', component: BooksComponent },
  { path: 'fashion', component: FashionComponent },
  { path: 'cart', component: MyCartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'mobile', component: MobilesComponent },
  { path: 'viewproduct/:id', component: ViewProductsComponent },
  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard] },
  { path: 'wishList', component: WishlistComponent, canActivate: [AuthGuard] },
  {
    path: 'landingPage',
    component: WishlistComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule],
})
export class UserShopRoutingModule {}
