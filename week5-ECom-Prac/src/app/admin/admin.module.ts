import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { FormsModule } from '@angular/forms';
import { UpdateProductsComponent } from './update-products/update-products.component';
import { UpdateWindowComponent } from './update-products/update-window/update-window.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ViewUsersComponent } from './view-users/view-users.component';
import { AddNewProductComponent } from './Products/add-new-product/add-new-product.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';




@NgModule({
  declarations: [
    AdminHomeComponent,
    UpdateProductsComponent,
    UpdateWindowComponent,
    ViewUsersComponent,
    AddNewProductComponent,
    UserOrdersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
  ],
})
export class AdminModule { }
