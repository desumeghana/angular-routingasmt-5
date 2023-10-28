import { Injectable } from '@angular/core';
interface User{
  id:number,
  name:string,
  email:string,
  password:string
}
@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  constructor() { }
  userdetails = [
    {
      id:1,
      name: "meghana",
      email:"desu.meghana@gmail.com",
      password:"pwd1"
    }
  ]
  addUser(user: User) {
    let tempuser={
      id:this.userdetails.length+1,
      name:user.name,
      email:user.email,
      password:user.password
    }
    this.userdetails.push(tempuser);
  }
  updateUser(user: User, id: number) {
    let idx = this.userdetails.findIndex(b => b.id == id);
    this.userdetails[idx].name = user.name;
    this.userdetails[idx].email = user.email;
    this.userdetails[idx].password = user.password;
  }
}

