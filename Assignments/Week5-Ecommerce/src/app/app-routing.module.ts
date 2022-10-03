import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AddNewProductComponent } from './admin/Products/add-new-product/add-new-product.component';
import { UpdateWindowComponent } from './admin/update-products/update-window/update-window.component';
import { UserOrdersComponent } from './admin/user-orders/user-orders.component';
import { ViewUsersComponent } from './admin/view-users/view-users.component';
import { AuthAdminGuard } from './auth.admin.guard';
import { AuthGuard } from './auth.guard';
import { BestSellersComponent } from './products/best-sellers/best-sellers.component';
import { BooksComponent } from './products/books/books.component';
import { FashionKidsComponent } from './products/fashion/fashion-kids/fashion-kids.component';
import { FashionMenComponent } from './products/fashion/fashion-men/fashion-men.component';
import { FashionWomenComponent } from './products/fashion/fashion-women/fashion-women.component';
import { FashionComponent } from './products/fashion/fashion.component';
import { MobilesComponent } from './products/mobiles/mobiles.component';
import { MyCartComponent } from './products/my-cart/my-cart.component';
import { ViewProductsComponent } from './products/view-products/view-products.component';
import { WishlistComponent } from './products/wishlist/wishlist.component';
import { AboutUsComponent } from './user-shop/about-us/about-us.component';
import { CheckoutComponent } from './user-shop/checkout/checkout.component';
import { Error404Component } from './user-shop/error404/error404.component';
import { HomeComponent } from './user-shop/home/home.component';
import { LoginComponent } from './user-shop/login/login.component';

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
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AuthAdminGuard],
  },
  { path: 'menfashion', component: FashionMenComponent },
  { path: 'kidsfashion', component: FashionKidsComponent },
  { path: 'womenfashion', component: FashionWomenComponent },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'userShop',
    loadChildren: () =>
      import('./user-shop/user-shop.module').then((m) => m.UserShopModule),
  },
  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard] },
  { path: 'wishList', component: WishlistComponent, canActivate: [AuthGuard] },
  {
    path: 'landingPage',
    component: WishlistComponent,
  },
  {
    path: 'adminPortal',
    component: AdminHomeComponent,
    canActivate: [AuthAdminGuard],
  },
  { path: 'updatewindow/:id', component: UpdateWindowComponent },
  { path: 'addNewProduct', component: AddNewProductComponent },
  { path: 'userWindow/:id', component: ViewUsersComponent },
  { path: 'userOrders', component: UserOrdersComponent },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [];
