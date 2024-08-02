import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateUserComponent } from './create-user/create-user.component';
import { PreventDoubleClickDirective } from '../shared/directive/prevent-double-click.directive';

@NgModule({
  declarations: [
    LoginComponent,
    ForgotpasswordComponent,
    CreateUserComponent,
    PreventDoubleClickDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    
  ]
})
export class LoginModule { }
