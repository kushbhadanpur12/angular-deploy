
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute}  from '@angular/router';
import {ReactiveFormsModule ,Form, FormGroup, Validators ,FormControl,Validator,FormsModule } from '@angular/forms';
import {AbstractControl} from '@angular/forms';
import { Http ,Response } from "@angular/http";
import { HttpClientModule } from  '@angular/common/http';
import { HttpModule} from '@angular/http';
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
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
// Services

import { SignupService } from './services/signup.service';



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
    BlogDetailComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: IndexComponent },
      { path: 'index', component: IndexComponent },
      { path: 'shop', component: ShopComponent },
      { path: 'cart', component: CartComponent },
      { path: 'about', component: AboutComponent },
      { path: 'blogs', component: BlogListComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'product-detail', component: ProductDetailComponent },
      { path: 'blog-detail', component: BlogDetailComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'login', component: LoginComponent }
    ])
  ],
  exports:[RouterModule],
  providers: [
    SignupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
