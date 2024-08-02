import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MessageSvcService {

  constructor(private toastr: ToastrService) { }
  successMsg(text:string,title:string){
    this.toastr.success(text, title,{
      timeOut: 3000, // time to display the toast
      positionClass: 'toast-bottom-right', // toast position
    });
  }
  infoMsg(text:string,title:string){
    this.toastr.info(text, title,{
      timeOut: 3000, // time to display the toast
      positionClass: 'toast-bottom-right', // toast position
    });
  }
  errorMsg(text:string,title:string){
    this.toastr.error(text, title,{
      timeOut: 3000, // time to display the toast
      positionClass: 'toast-bottom-right', // toast position
    });
  }
  warningMsg(text:string,title:string){
    this.toastr.warning(text, title,{
      timeOut: 3000, // time to display the toast
      positionClass: 'toast-bottom-right', // toast position
    });
  }
  systemErrorMsg(error:any){
    if (error instanceof Error) {
      this.errorMsg(error.message, "Error!");
    } else {
      this.errorMsg("An unexpected error occurred", "Error!");
    }
  }


}
