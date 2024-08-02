import { Injectable } from '@angular/core';
import { CommonDataService } from 'src/app/common-svc/common-data.service';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {
  baseUrl:string="http://localhost:4500";
  constructor(private dataSvc:CommonDataService) { }

  login(postModel:any){
    return this.dataSvc.post(this.baseUrl,"login/UserLogin",postModel);
  }
  save(postModel:any){
    return this.dataSvc.post(this.baseUrl,"login/Register",postModel);
  }
  getItem(){
    return this.dataSvc.getList(this.baseUrl,"item/getitem");
  }
  getItemList(){
    return this.dataSvc.getList(this.baseUrl,"item/getitem",[{id:1,name:'test'}]);
  }
}
