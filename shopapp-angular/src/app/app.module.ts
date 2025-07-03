import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FotterComponent } from './fotter/fotter.component';
import { OrderComponent } from './order/order.component';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DetailProductComponent } from './detail-product/detail-product.component';

@NgModule({
  declarations: [

    HomeComponent,
      HeaderComponent,
      FotterComponent,
      OrderComponent,
      OrderConfirmComponent,
      LoginComponent,
      RegisterComponent,
      DetailProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    HomeComponent,
   //OrderComponent,
   //OrderConfirmComponent,
   //LoginComponent,
   //RegisterComponent,
    //DetailProductComponent
   ]
})
export class AppModule { }
