import { Component } from '@angular/core';
import { UserdataService } from '../userdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  
  constructor(public userobj:UserdataService,private router:Router)
  {
    
  }
  







  // editform:boolean=false;
  // updateId:number=-1;
  // showEditForm(i:any) {
  //   this.editform = true; // Show the form when the "Create" button is clicked
  //   this.updateId=i.id;
  // }
  // updateUser() 
  // {
  //   this.userobj.updateUser(this.newUser,this.updateId);
  //   this.newUser = {
  //     name: '',
  //     id: 0
  //   };
  //   this.editform = false; // Hide the form after user creation
  // }
}

