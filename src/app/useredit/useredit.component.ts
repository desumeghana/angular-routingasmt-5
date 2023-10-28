import { Component,OnInit,OnChanges} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserdataService } from '../userdata.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UsereditComponent {
  id:number|undefined;
  constructor(private activatedroute:ActivatedRoute,public userobj:UserdataService,private router:Router)
  {
    this.activatedroute.params.subscribe((params)=>{
      this.id=params['id'];
      });
  }
  profileform=new FormGroup({
    name:new FormControl("",Validators.required),
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required,Validators.minLength(6)])
  });

  newUser: any = {
      name: '',
      email:"",
      password:""
    };
  updateUser() 
  {
    this.newUser=this.profileform.value;
    this.userobj.updateUser(this.newUser,this.id!);
    this.newUser = {
      name: '',
      id: 0
    };
    this.router.navigate(['/users']);
  }
}
