import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { AuthService } from './user-auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  standalone: true, 
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  @ViewChild('container') container!: ElementRef;

  name: string = '';
  email: string = '';
  password: string = '';
  registerMessage: string = ''; 
  loginMessage: string = ''; 
  isLoggedIn: boolean = false;
  isLoggedout:boolean=true;
 

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn(); 
    if (this.isLoggedIn) {
      this.name = localStorage.getItem('name') || ''; 
    }
  }

  signIn() {
    this.container.nativeElement.classList.remove('right-panel-active');
  }

  signUp() {
    this.container.nativeElement.classList.add('right-panel-active');
  }

  login() {
    if (this.email && this.password) {
      this.authService.login(this.email, this.password).subscribe({
        next: (res: any) => {
          if (res.status === 'success') {
            localStorage.setItem('id', res.id);
            localStorage.setItem('name', res.name); 
            this.isLoggedIn = true;
            this.isLoggedout=false;
            this.name = res.name;
            window.location.href = 'http://localhost:4200/'; 
          } else {
            this.loginMessage = res.message;  
          }
        },
        error: (err) => {
          this.loginMessage = 'Login error: ' + err.message; 
        }
      });
    } else {
      this.loginMessage = 'Please enter both email and password.'; 
    }
  }
  
  register() {
    this.authService.signUp(this.name, this.email, this.password).subscribe({
      next: (res: any) => {
        if (res.status === 'success') {
          this.registerMessage = 'User created successfully!'; 
        } else {
          this.registerMessage = res.message; 
        }
      },
      error: () => {
        this.registerMessage = 'An error occurred during registration';
      }
    });
  }

  logout() {
    this.authService.logout(); 
    this.isLoggedIn = false;
    this.isLoggedout=true;
    this.name = '';
    window.location.href = 'http://localhost:4200/auth/'; 
  }
}
