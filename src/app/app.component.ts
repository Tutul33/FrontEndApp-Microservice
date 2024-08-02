import { Component, OnInit } from '@angular/core';
import { AuthService } from './common-svc/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'front-end';
  constructor(private authSvc:AuthService){
    
  }
  ngOnInit(): void {    
    
  }
  
  isAuthenticated(){
   return this.authSvc.isLoggedIn();
  }
}
