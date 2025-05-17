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
}
