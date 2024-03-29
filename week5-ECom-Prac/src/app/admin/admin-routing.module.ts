import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthAdminGuard } from '../auth.admin.guard';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddNewProductComponent } from './Products/add-new-product/add-new-product.component';
import { UpdateWindowComponent } from './update-products/update-window/update-window.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { ViewUsersComponent } from './view-users/view-users.component';

const routes: Routes = [
  {
    path: 'adminPortal',
    component: AdminHomeComponent,
    canActivate: [AuthAdminGuard],
  },
  { path: 'updatewindow/:id', component: UpdateWindowComponent },
  { path: 'addNewProduct', component: AddNewProductComponent },
  { path: 'userWindow/:id', component: ViewUsersComponent },
  { path: 'userOrders', component: UserOrdersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
