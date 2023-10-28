import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductdataService } from '../productdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productcreate',
  templateUrl: './productcreate.component.html',
  styleUrls: ['./productcreate.component.css']
})
export class ProductcreateComponent {
  constructor(public productobj:ProductdataService,private router:Router){}
  productform=new FormGroup({
    title:new FormControl("",Validators.required),
    image:new FormControl(""),
    description:new FormControl(""),
    price:new FormControl("",Validators.required),
    rating:new FormControl("")
  });

  newProduct: any = {
      title: '',
      image:"",
      description:"",
      price:0,
      rating:"",
    };
    
    createProduct() 
    {
       this.newProduct=this.productform.value;
       this.productobj.addProduct(this.newProduct);
        this.router.navigate(['/products']);
    }
}
