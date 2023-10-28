import { Component } from '@angular/core';
import { UserdataService } from '../userdata.service';
import { ActivatedRoute } from '@angular/router';
interface User{
  id:number,
  name:string,
  email:string,
  password:string
}
@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent {
  idx:number=0;
  newUser: User |undefined;
  constructor(public userobj:UserdataService,private activatedroute:ActivatedRoute){
      this.activatedroute.params.subscribe(params=>{
        this.idx=params['id']-1;
        this.newUser=this.userobj.userdetails[this.idx];
      })
  }
 
 
}
