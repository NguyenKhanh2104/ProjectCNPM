import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './Component/footer/footer.component';
import { HeaderComponent } from './Component/header/header.component';
import { HomeComponent } from './Component/Home/home.component';
import { LoginComponent } from './Component/Login/login.component';
import { RegisterComponent } from './Component/register/register.component';


const routes: Routes = [
  {path: 'Home',component: HomeComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'footer',component: FooterComponent}




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookExchangeRoutingModule { }
