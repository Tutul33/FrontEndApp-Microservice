import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common-svc/auth.service';
import { LoginDataService } from '../service/login-data.service';
import { UserLogin } from '../model/user-login.model';

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
  user: any={
    userName:'',
    password:''
  };
  constructor(
    private router: Router,
    private authService: AuthService,
    private dataSvc: LoginDataService
  ) {
    
  }
  ngOnInit(): void {
    localStorage.setItem('loggedIn', 'false');
  }

  login() {    
    this.dataSvc.login(this.user).subscribe((res) => {
      console.log(res);
      this.authService.login();

      // Navigate to dashboard if login is successful
      this.router.navigate(['/dashboard']);
    });
  }
}
