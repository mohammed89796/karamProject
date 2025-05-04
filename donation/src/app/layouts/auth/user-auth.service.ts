import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost/donation/backend2';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post<any>(`${this.apiUrl}/login.php`, body);
  }

  signUp(name: string, email: string, password: string): Observable<any> {
    const body = { name, email, password };
    return this.http.post<any>(`${this.apiUrl}/usersubmit.php`, body);
  }

  handleLoginResponse(response: any): void {
    if (response.status === 'success') {
      localStorage.setItem('id', response.id);
      localStorage.setItem('name', response.name); 
    }
  }

  handleSignUpResponse(response: any): void {
    if (response.status === 'success') {
    }
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('id'); 
  }

  logout(): void {
    localStorage.removeItem('id');
    localStorage.removeItem('name');
  }
}
