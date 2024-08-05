import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { AuthService } from 'src/app/common-svc/auth.service';
import { DataTransferService } from 'src/app/shared/services/data-transfer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  userSubscription: Subscription | any;
  constructor(
    private router: Router,
    private authService: AuthService,
    private dataTrf: DataTransferService
  ) {
   this.userSubscription= this.dataTrf.on('userInfo').subscribe((res)=>{
        console.log('Logged in User Info',res);
    });
  }
  ngOnInit(): void {
    
  }
  logOut() {
    this.authService.logout();
    this.dataTrf.remove('userInfo');
    this.userSubscription.unsubscribe();
    this.router.navigate(['/login']);
  }
}
