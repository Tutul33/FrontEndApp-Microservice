import { Injectable } from '@angular/core';
import { CommonDataService } from 'src/app/common-svc/common-data.service';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {
  baseUrl:string="http://localhost:4501";
  constructor(private dataSvc:CommonDataService) { }

  login(postModel:any){
    return this.dataSvc.post(this.baseUrl,"api/login/UserLogin",postModel);
  }
  save(postModel:any){
    return this.dataSvc.post(this.baseUrl,"api/login/Register",postModel);
  }
}
