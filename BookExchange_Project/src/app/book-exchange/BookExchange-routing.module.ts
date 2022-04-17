import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/Home/home.component';
import { LoginComponent } from './Component/Login/login.component';


const routes: Routes = [
  {path: 'Home',component: HomeComponent},
  {path: 'Login', component: LoginComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookExchangeRoutingModule { }
