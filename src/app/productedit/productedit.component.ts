import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductdataService } from '../productdata.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
interface product{
  id:number,
  title:string,
  image:string,
  description:string,
  price:number,
  rating:number
}
@Component({
  selector: 'app-productedit',
  templateUrl: './productedit.component.html',
  styleUrls: ['./productedit.component.css']
})
export class ProducteditComponent {
  newProduct:product|undefined;
  productform:FormGroup|undefined;
  constructor(private activatedroute:ActivatedRoute,public productobj:ProductdataService,private router:Router)
  {
    this.activatedroute.params.subscribe((params)=>{
      let value=params['id'];
      let idx=this.productobj.productdetails.findIndex(b=>b.id==value);
      this.productform=new FormGroup({
        title:new FormControl(this.productobj.productdetails[idx].title,Validators.required),
        image:new FormControl(""),
        description:new FormControl(""),
        price:new FormControl("",Validators.required),
        rating:new FormControl("",Validators.required)
      });
      this.newProduct=this.productform.value;
      });
  //     updateProduct()
  // {
  //   this.productobj.updateProduct();
  //    this.router.navigate(['/products']);
  // }
  }
  func()
  {
    
  }
 
  
}
