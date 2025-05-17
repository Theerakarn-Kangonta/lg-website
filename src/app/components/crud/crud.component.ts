import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss'
})
export class CrudComponent {
  productsItems : any = [];
  constructor(
    public _homeService : HomeService
  ) {
    
    
  }
ngOnInit(): void {
    this.loadProducts();
  }
  loadProducts() {
    this._homeService.getAll().subscribe((data : any) => {
      console.log(data);
      this.productsItems = data
    });
  }
  onFileSelected(event: Event, product: any) {
  const input = event.target as HTMLInputElement;
  if (!input.files?.length) return;

  const file = input.files[0];
  
  // Prepare FormData to send file + product id (or any identifier)
  const formData = new FormData();
  formData.append('file', file);
  formData.append('productId', product.id); // adjust if your product has 'id'

  // Call your service method to upload the file to backend
  this._homeService.uploadProductImage(formData).subscribe({
    next: (res) => {
      console.log('Upload successful', res);
      // Optionally update product imageUrl after upload
      product.imageUrl = res.imageUrl; // adjust based on backend response
    },
    error: (err) => {
      console.error('Upload error', err);
    }
  });
}

}
