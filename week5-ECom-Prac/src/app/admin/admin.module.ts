import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminAddProductsComponent } from './Products/admin-add-products/admin-add-products.component';
import { AddMobilesComponent } from './Products/add-mobiles/add-mobiles.component';
import { AddMenComponent } from './Products/add-men/add-men.component';
import { AddWomenComponent } from './Products/add-women/add-women.component';
import { AddKidsComponent } from './Products/add-kids/add-kids.component';
import { AddBooksComponent } from './Products/add-books/add-books.component';
import { FormsModule } from '@angular/forms';
import { UpdateProductsComponent } from './update-products/update-products.component';
import { DeleteProductsComponent } from './delete-products/delete-products.component';
import { UpdateWindowComponent } from './update-products/update-window/update-window.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ViewUsersComponent } from './view-users/view-users.component';



@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminAddProductsComponent,
    AddMobilesComponent,
    AddMenComponent,
    AddWomenComponent,
    AddKidsComponent,
    AddBooksComponent,
    UpdateProductsComponent,
    DeleteProductsComponent,
    UpdateWindowComponent,
    ViewUsersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
})
export class AdminModule { }
