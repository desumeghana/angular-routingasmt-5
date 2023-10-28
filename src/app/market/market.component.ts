import { Component } from '@angular/core';
import { ProductdataService } from '../productdata.service';
interface Product {
  id: number,
  title: string,
  image: string,
  description: string,
  price: number,
  rating: number
}
@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent {
  constructor(public productobj:ProductdataService)
  {

  }
  addtocart(i:Product)
  {
    this.productobj.cartData.push(i);
    this.productobj.price+=i.price;
  }
}
