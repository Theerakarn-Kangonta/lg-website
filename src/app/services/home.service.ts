import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = 'https://localhost:7239/api'; // adjust for your API
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/product');
  }
  create(product: any): Observable<any> {
    return this.http.post<Product>(this.apiUrl  + '/product', product);
  }

  update(product: any): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}  + '/product' ${product.id}`, product);
  }

  delete(id: any): Observable<any> {
    return this.http.delete<void>(`${this.apiUrl} + '/product' ${id}`);
  }
}
