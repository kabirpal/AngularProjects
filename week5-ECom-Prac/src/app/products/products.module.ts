import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestSellersComponent } from './best-sellers/best-sellers.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { BooksComponent } from './books/books.component';
import { FashionComponent } from './fashion/fashion.component';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { BestMobilesComponent } from './best-sellers/best-mobiles/best-mobiles.component';
import { BestBooksComponent } from './best-sellers/best-books/best-books.component';
import { BestMenFashionComponent } from './best-sellers/best-men-fashion/best-men-fashion.component';
import { BestWomenFashionComponent } from './best-sellers/best-women-fashion/best-women-fashion.component';
import { BestkidsFashionComponent } from './best-sellers/bestkids-fashion/bestkids-fashion.component';
import { BooksCarouselComponent } from './books/books-carousel/books-carousel.component';
import { DramaComponent } from './books/drama/drama.component';
import { FictionComponent } from './books/fiction/fiction.component';
import { RomanceComponent } from './books/romance/romance.component';
import { FashionHomeComponent } from './fashion/fashion-home/fashion-home.component';
import { FashionMenComponent } from './fashion/fashion-men/fashion-men.component';
import { FashionWomenComponent } from './fashion/fashion-women/fashion-women.component';
import { FashionKidsComponent } from './fashion/fashion-kids/fashion-kids.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { MobilecarouselComponent } from './mobiles/mobilecarousel/mobilecarousel.component';
import { SelfHelpComponent } from './books/self-help/self-help.component';
import { RouterModule } from '@angular/router';
import { ProductRoutingModule } from './product-routing.module';
import { MyCartComponent } from './my-cart/my-cart.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { WishlistComponent } from './wishlist/wishlist.component';



@NgModule({
  declarations: [
    BestSellersComponent,
    MobilesComponent,
    BooksComponent,
    FashionComponent,
    ProductsHomeComponent,
    BestMobilesComponent,
    BestBooksComponent,
    BestMenFashionComponent,
    BestWomenFashionComponent,
    BestkidsFashionComponent,
    BooksCarouselComponent,
    DramaComponent,
    FictionComponent,
    RomanceComponent,
    FashionHomeComponent,
    FashionMenComponent,
    FashionWomenComponent,
    FashionKidsComponent,
    ViewProductsComponent,
    MobilecarouselComponent,
    SelfHelpComponent,
    MyCartComponent,
    SpinnerComponent,
    WishlistComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    ProductRoutingModule
  ],
  exports:[
    SpinnerComponent
  ]
})
export class ProductsModule { }
