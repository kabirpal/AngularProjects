import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AuthAdminGuard } from './auth.admin.guard';
import { AuthGuard } from './auth.guard';
import { BestSellersComponent } from './products/best-sellers/best-sellers.component';
import { BooksComponent } from './products/books/books.component';
import { FashionComponent } from './products/fashion/fashion.component';
import { MobilesComponent } from './products/mobiles/mobiles.component';
import { MyCartComponent } from './products/my-cart/my-cart.component';
import { ViewProductsComponent } from './products/view-products/view-products.component';
import { AboutUsComponent } from './user-shop/about-us/about-us.component';
import { CheckoutComponent } from './user-shop/checkout/checkout.component';
import { HomeComponent } from './user-shop/home/home.component';
import { LoginComponent } from './user-shop/login/login.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'bestseller',component:BestSellersComponent},
  {path:'books',component:BooksComponent},
  {path:'fashion',component:FashionComponent},
  {path:'cart',component:MyCartComponent},
  {path:'login',component:LoginComponent},
  {path:'about',component:AboutUsComponent},
  {path:'mobile',component:MobilesComponent},
  {path:'viewproduct/:id',component:ViewProductsComponent},
  {path:'admin',loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate: [AuthAdminGuard]},  
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  {path:'checkout',component:CheckoutComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[

]