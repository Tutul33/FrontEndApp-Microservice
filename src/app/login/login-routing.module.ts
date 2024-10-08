import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { CreateUserComponent } from './create-user/create-user.component';

const routes:Routes=[
  {
    path:'',
    component:LoginComponent
  }
  ,{
    path:'login',
    component:LoginComponent
  },
  {
    path:'forgotpassword',
    component:ForgotpasswordComponent
  }
  ,
  {
    path:'register',
    component:CreateUserComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
