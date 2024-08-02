import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginModelService {
  userModel!:User;
  constructor() { }
  setDefaultData(){
    this.userModel=new User();
  }
  prepareData(user:any){
    try {
      this.userModel=new User(user);
      return this.userModel;
    } catch (error) {
      return error;
    }
  }
}
