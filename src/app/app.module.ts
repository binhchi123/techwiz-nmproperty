import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { OwlModule } from 'ngx-owl-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DetailComponent } from './detail/detail.component';
import { AboutComponent } from './about/about.component';
import { ListComponent } from './list/list.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    DetailComponent,
    AboutComponent,
    ListComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxStarRatingModule
    // OwlCarousel
    // OwlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
