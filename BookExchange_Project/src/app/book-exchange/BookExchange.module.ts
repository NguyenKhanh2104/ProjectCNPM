import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './Component/Home/home.component';
import { BookExchangeRoutingModule } from './BookExchange-routing.module';

@NgModule({
  declarations: [
   HomeComponent

  ],
  imports: [
    CommonModule,
   
   BookExchangeRoutingModule
   
  ],
  providers:[
    // ServerHttpService
  ]
})
export class BookExchangeModule { }
