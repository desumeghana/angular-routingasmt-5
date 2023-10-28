import { Component } from '@angular/core';
import { ProductdataService } from '../productdata.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(public productobj:ProductdataService)
  {
    
  }
}
