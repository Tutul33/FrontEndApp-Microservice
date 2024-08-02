import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common-svc/auth.service';
import { LoginDataService } from '../service/login-data.service';
import { UserLogin } from '../model/user-login.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageSvcService } from 'src/app/common-svc/message-svc.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[
    AuthService,
    LoginDataService
  ]
})
export class LoginComponent implements OnInit {
 
  loginForm!: FormGroup;
  constructor(
    private router: Router,
    private authService: AuthService,
    private dataSvc: LoginDataService,
    private fb: FormBuilder,
    private msg:MessageSvcService
  ) {
    
  }
  ngOnInit(): void {
    localStorage.setItem('loggedIn', 'false');
    this.createForm();
  }
  createForm(){
   try {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      remember: [false]
    });
   } catch (error) {
    this.msg.systemErrorMsg(error);
   }
  }

  login() {    
    try {
      if (this.loginForm.valid) {
        const loginData = this.loginForm.value;
      this.dataSvc.login(loginData).subscribe((res) => {
        if(res.id){
          this.authService.login();
          this.msg.successMsg("Login Successfully","Success!");
          // Navigate to dashboard if login is successful
          this.router.navigate(['/dashboard']);
        }else{
          this.msg.warningMsg("Your not authorized.","Warning!");
        }
      });
    }else{
      this.msg.errorMsg("Invalid","Error!");
    }
    } catch (error) {
      this.msg.systemErrorMsg(error);
    }
  }
}
