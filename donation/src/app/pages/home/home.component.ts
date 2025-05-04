import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../layouts/auth/user-auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn = false;
  isLoggedout = false;
  name = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Ensure that we are running in the browser before accessing localStorage
      const id = localStorage.getItem('id');
      const name = localStorage.getItem('name');

      if (id && name) {
        this.isLoggedIn = true;
        this.name = name;
      } else {
        this.isLoggedout = true;  // User is not logged in
      }
    }
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('id');
      localStorage.removeItem('name');
    }
    this.isLoggedIn = false;
    this.isLoggedout = true;  // User logged out
    this.router.navigate(['/auth']);
  }

  login() {
    this.router.navigate(['/auth']);
  }
}
