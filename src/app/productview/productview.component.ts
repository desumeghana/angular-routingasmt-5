import { Component } from '@angular/core';
import { ProductdataService } from '../productdata.service';
import { ActivatedRoute } from '@angular/router';
interface product{
  id:number,
  title:string,
  image:string,
  description:string,
  price:number,
  rating:number
}
@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css']
})
export class ProductviewComponent {
  newproduct:product|undefined;
  constructor(public productobj:ProductdataService,private activatedroute:ActivatedRoute){
      this.activatedroute.params.subscribe(params=>{
        let id=params['id'];
        let idx=this.productobj.productdetails.findIndex(b=>b.id==id);
        this.newproduct=productobj.productdetails[idx];
      })
  }
  
}
