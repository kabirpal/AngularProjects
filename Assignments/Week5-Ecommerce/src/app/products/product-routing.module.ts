import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FashionKidsComponent } from './fashion/fashion-kids/fashion-kids.component';
import { FashionMenComponent } from './fashion/fashion-men/fashion-men.component';
import { FashionWomenComponent } from './fashion/fashion-women/fashion-women.component';

const routes: Routes = [
  { path: 'menfashion', component: FashionMenComponent },
  { path: 'kidsfashion', component: FashionKidsComponent },
  { path: 'womenfashion', component: FashionWomenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
