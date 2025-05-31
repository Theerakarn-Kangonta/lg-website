import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = environment.apiUrl; // adjust for your API
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/product');
  }
  create(product: FormData): Observable<any> {
  return this.http.post(this.apiUrl + '/product', product); // No need to set headers
}

  update(product: any): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}  + '/product' ${product.id}`, product);
  }

  delete(id: any): Observable<any> {
    return this.http.delete<void>(`${this.apiUrl} + '/product' ${id}`);
  }
   uploadProductImage(formData: FormData) {
    console.log(formData);
    // POST to backend endpoint that handles file upload
    return this.http.post<{ imageUrl: string }>(`${this.apiUrl}/product/upload-image`, formData);
  }
}
