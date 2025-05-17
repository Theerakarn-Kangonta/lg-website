import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = environment.apiUrl;; // adjust for your API
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
   uploadProductImage(formData: FormData) {
    // POST to backend endpoint that handles file upload
    return this.http.post<{ imageUrl: string }>(`${this.apiUrl}/upload-image`, formData);
  }
}
