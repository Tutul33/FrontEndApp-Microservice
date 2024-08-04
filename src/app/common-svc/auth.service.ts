import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean>;
  private isAuthenticated = false;
  constructor() {
    // Initialize based on saved state (e.g., from localStorage)
    const savedLoggedIn = !!localStorage.getItem('loggedIn');
    this.loggedIn = new BehaviorSubject<boolean>(savedLoggedIn);
  }
  login(): void {
    // Simulate login logic, ideally this would involve authentication via an API
    // For demonstration purposes, we just set a flag and notify subscribers
    
    localStorage.setItem('loggedIn', 'true');
    this.loggedIn.next(true);
  }

  logout() {
    this.isAuthenticated = false;
    this.loggedIn.next(false);
    localStorage.removeItem("loggedIn")
    // Here you might remove a token from local storage or handle other logout logic
  }

  isLoggedIn(): boolean {
    const isLoggedIn =localStorage.getItem("loggedIn");
    if(isLoggedIn=="true"){
      this.isAuthenticated=true;
    }else{
      this.isAuthenticated=false;
    }
    return this.isAuthenticated;
  }
}
