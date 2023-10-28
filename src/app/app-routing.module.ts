import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { UsercreateComponent } from './usercreate/usercreate.component';
import { UsereditComponent } from './useredit/useredit.component';
import { UserviewComponent } from './userview/userview.component';
import { ProductcreateComponent } from './productcreate/productcreate.component';
import { ProducteditComponent } from './productedit/productedit.component';
import { ProductviewComponent } from './productview/productview.component';
import { MarketComponent } from './market/market.component';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent 
  },
  {
    path:"register",
    component:RegisterComponent 
  },
  {
    path:"users",
    component:UsersComponent ,
    children:[
      {
        path:"create",
        component:UsercreateComponent
      },
      {
        path:"edit/:id",
        component:UsereditComponent
      },
      {
        path:"view/:id",
        component:UserviewComponent
      }
    ]
  },
  {
    path:"products",
    component:ProductsComponent,
    children:[
      {
        path:"create",
        component:ProductcreateComponent
      },
      {
        path:"edit/:id",
        component:ProducteditComponent
      },
      {
        path:"view/:id",
        component:ProductviewComponent
      }
    ]
  },
  {
    path:"cart",
    component:CartComponent 
  },
  {
    path:"market",
    component:MarketComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
