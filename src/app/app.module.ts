import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute}  from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { PreHeaderComponent } from './layouts/pre-header/pre-header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SliderComponent } from './home/slider/slider.component';
import { ProductCategoryComponent } from './home/product-category/product-category.component';
import { FeaturedProductComponent } from './home/featured-product/featured-product.component';
import { BlogComponent } from './home/blog/blog.component';
import { IndexComponent } from './home/index/index.component';
import { CartComponent } from './cart/cart.component';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PreHeaderComponent,
    FooterComponent,
    SliderComponent,
    ProductCategoryComponent,
    FeaturedProductComponent,
    BlogComponent,
    IndexComponent,
    CartComponent,
    ShopComponent,
    AboutComponent,
    ContactComponent,
    BlogListComponent,
    ProductDetailComponent,
    BlogDetailComponent
  ],
  imports: [
    BrowserModule,
     RouterModule.forRoot([
      { path: '', component: IndexComponent },
      { path: 'index', component: IndexComponent },
      { path: 'shop', component: ShopComponent },
      { path: 'cart', component: CartComponent },
      { path: 'about', component: AboutComponent },
      { path: 'blogs', component: BlogListComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'product-detail', component: ProductDetailComponent },
      { path: 'blog-detail', component: BlogDetailComponent }
    ])
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
