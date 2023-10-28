import { Component } from '@angular/core';
import { UserdataService } from '../userdata.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usercreate',
  templateUrl: './usercreate.component.html',
  styleUrls: ['./usercreate.component.css']
})
export class UsercreateComponent {
  constructor(public userobj:UserdataService,private router:Router){}
  profileform=new FormGroup({
    name:new FormControl("",Validators.required),
    email:new FormControl("",Validators.email),
    password:new FormControl("",[Validators.required,Validators.minLength(6)])
  });

  newUser: any = {
      name: '',
      email:"",
      password:""
    };
    
    createUser() 
    {
      console.log(this.profileform.value);
      this.newUser=this.profileform.value;
      this.userobj.addUser(this.newUser);
      this.router.navigate(['/users']);
    }
}
