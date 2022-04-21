import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './Component/Home/home.component';
import { BookExchangeRoutingModule } from './BookExchange-routing.module';
import { LoginComponent } from './Component/Login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './Component/header/header.component';
import { RegisterComponent } from './Component/register/register.component';
import { FooterComponent } from './Component/footer/footer.component';


@NgModule({
  declarations: [
   HomeComponent,
   LoginComponent,
   HeaderComponent,
   RegisterComponent,
   FooterComponent

  ],
  imports: [
    CommonModule,
    BrowserModule,
   BookExchangeRoutingModule,
   ReactiveFormsModule

   
  ],
  providers:[
    // ServerHttpService
  
  ],
  bootstrap: [LoginComponent]
  
})
export class BookExchangeModule { }
