import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  id?: number;
  name: string;
  image?: string; 
  email?: string;
  currency?: string;
  nationality?: string;
  donation_type?: string;
  phone?: string;
  amount?: number;
  address?: string;
  place?:string;
}

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private apiUrl = 'http://localhost/donation/backend2';  // Adjust API URL

  constructor(private http: HttpClient) { }

  // جلب كل الـ history من السيرفر
  getHistoryFromServer(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/history.php`);
  }

  addHistory(product: Product): Observable<any> {
    return this.http.post<any>('http://localhost/donation/backend2/history.php', product);
  }
}
