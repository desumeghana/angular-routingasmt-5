import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { UsercreateComponent } from './usercreate/usercreate.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsereditComponent } from './useredit/useredit.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { UserviewComponent } from './userview/userview.component';
import { ProductcreateComponent } from './productcreate/productcreate.component';
import { ProducteditComponent } from './productedit/productedit.component';
import { ProductviewComponent } from './productview/productview.component';
import { MarketComponent } from './market/market.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    UsercreateComponent,
    CartComponent,
    ProductsComponent,
    UsereditComponent,
    SidebarComponent,
    TopbarComponent,
    UserviewComponent,
    ProductcreateComponent,
    ProducteditComponent,
    ProductviewComponent,
    MarketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
