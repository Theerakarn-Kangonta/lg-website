import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss'
})
export class CrudComponent {
  selectedFile: File | null = null;
  productsItems: any = [];
  productForm: FormGroup;
  showModal: boolean = false;

  categories = [
    { value: 1, label: 'Electronics' },
    { value: 2, label: 'Clothing' },
    { value: 3, label: 'Books' },
    { value: 4, label: 'Furniture' }
  ];
  constructor(
    public _homeService: HomeService,
    private fb: FormBuilder
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      detail: ['', Validators.required],
      categoryGroup: [null, Validators.required],
      price: [null, [Validators.required, Validators.min(0)]],
      monthSubscription: ['', [Validators.required, Validators.min(0)]],
    });

  }
  ngOnInit(): void {
    this.loadProducts();
  }
  loadProducts() {
    this._homeService.getAll().subscribe((data: any) => {
      console.log(data);
      this.productsItems = data
    });
  }

  addProduct() {
    if (this.productForm.valid) {
      const formData = new FormData();

      formData.append('name', this.productForm.get('name')?.value);
      formData.append('detail', this.productForm.get('detail')?.value);
      formData.append('price', this.productForm.get('price')?.value.toString());
      formData.append('categoryGroup', this.productForm.get('categoryGroup')?.value);
      formData.append('monthSubscription', this.productForm.get('monthSubscription')?.value.toString());

      if (this.selectedFile) {
        formData.append('imageFile', this.selectedFile, this.selectedFile.name);
      }

      // Debug output
      for (const [key, val] of (formData as any).entries()) {
        console.log(`${key}:`, val);
      }

      this._homeService.create(formData).subscribe({
        next: (response) => {
          console.log('Product added successfully:', response);
          this.productsItems = response;
          this.productForm.reset();
          this.selectedFile = null;
          this.showModal = false;
        },
        error: (err) => {
          console.error('Upload failed:', err);
        }
      });
    }
  }







  // onFileSelected(event: Event, product: any) {

  //   console.log(event);
  //   const input = event.target as HTMLInputElement;


  //   if (!input.files?.length) return;

  //   const file = input.files[0];

  //   // Prepare FormData to send file + product id (or any identifier)
  //   const formData = new FormData();
  //   formData.append('file', file);
  //   if (product) {
  //     formData.append('productId', product.id); // adjust if your product has 'id'
  //   }
  //   console.log(formData);

  //   // Call your service method to upload the file to backend
  //   this._homeService.uploadProductImage(formData).subscribe({
  //     next: (res) => {
  //       console.log('Upload successful', res);
  //     },
  //     error: (err) => {
  //       console.error('Upload error', err);
  //     }
  //   });
  // }
  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.selectedFile = fileInput.files[0];
    }
  }
}
