import { Component } from '@angular/core';
import { ProductdataService } from '../productdata.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(public cartdata:ProductdataService){
  }
  remove(i:any)
  {
    let idx=this.cartdata.cartData.findIndex(b=>b.id==i.id);
    this.cartdata.cartData.splice(idx,1);
    this.cartdata.price-=i.price;
  }
}
