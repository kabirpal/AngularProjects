import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminAddProductsComponent } from './Products/admin-add-products/admin-add-products.component';
import { AddWomenComponent } from './Products/add-women/add-women.component';
import { AddBooksComponent } from './Products/add-books/add-books.component';
import { FormsModule } from '@angular/forms';
import { UpdateProductsComponent } from './update-products/update-products.component';
import { UpdateWindowComponent } from './update-products/update-window/update-window.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ViewUsersComponent } from './view-users/view-users.component';
import { AddNewProductComponent } from './Products/add-new-product/add-new-product.component';




@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminAddProductsComponent,
    AddWomenComponent,
    AddBooksComponent,
    UpdateProductsComponent,
    UpdateWindowComponent,
    ViewUsersComponent,
    AddNewProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
  ],
})
export class AdminModule { }
