import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  products = [
    { name: 'เครื่องกรองน้ำ LG PuriCare แบบตั้งพื้น รุ่น WS510SN สีขาว', price: 899, monthSub: 15, imageUrl: 'assets/images/product1.jpg' },
    { name: 'เครื่องกรองน้ำ LG PuriCare Objet Collection รุ่น WD518AN.AWHPLMT สีขาว', price: 999, monthSub: 18, imageUrl: 'assets/images/product2.jpg' },
    { name: 'เครื่องกรองน้ำ สีเบจ LG PuriCare Objet Collection รุ่น WD518AN.ABGPLMT', price: 999, monthSub: 18, imageUrl: 'assets/images/product3.jpg' },
    { name: 'เครื่องกรองน้ำ LG PuriCare รุ่น WD516AN.ACNPLMT สีน้ำเงิน', price: 849, monthSub: 15, imageUrl: 'assets/images/product4.jpg' },
    { name: 'เครื่องลดความชื้น LG PuriCare Dehumidifier 19 รุ่น MD19GQGA1 19 ลิตร', price: 799, monthSub: 14, imageUrl: 'assets/images/product5.jpg' },
    { name: 'เครื่องฟอกอากาศ LG PuriCare 360 Hit', price: 699, monthSub: 12, imageUrl: 'assets/images/product6.jpg' },
    { name: 'เครื่องฟอกอากาศ LG PuriCare New 360 รุ่น AS65GDWH0 พร้อม Clean Booster', price: 799, monthSub: 16, imageUrl: 'assets/images/product7.jpg' },
    { name: 'เครื่องฟอกอากาศ LG PuriCare New 360 รุ่น AS10GDWH0', price: 749, monthSub: 14, imageUrl: 'assets/images/product8.jpg' },
    { name: 'แอร์อินเวอร์เตอร์ LG DUALCOOL AI Air รุ่น SAQ11A', price: 1099, monthSub: 20, imageUrl: 'assets/images/product9.jpg' },
    { name: 'แอร์อินเวอร์เตอร์ LG DUALCOOL AI Air รุ่น SAQ13A', price: 1099, monthSub: 22, imageUrl: 'assets/images/product10.jpg' },
    { name: 'แอร์อินเวอร์เตอร์ LG DUALCOOL AI Air รุ่น SEQ11A', price: 1149, monthSub: 20, imageUrl: 'assets/images/product11.jpg' },
    { name: 'แอร์อินเวอร์เตอร์ LG DUALCOOL AI Air รุ่น SEQ11A', price: 1149, monthSub: 20, imageUrl: 'assets/images/product12.jpg' },
    { name: 'แอร์อินเวอร์เตอร์ LG DUALCOOL AI Air รุ่น SCQ18A', price: 1299, monthSub: 24, imageUrl: 'assets/images/product13.jpg' },
    { name: 'แอร์อินเวอร์เตอร์ LG DUALCOOL AI Air รุ่น SCQ24A', price: 1399, monthSub: 24, imageUrl: 'assets/images/product14.jpg' },
    { name: 'แอร์อินเวอร์เตอร์ LG DUALCOOL AI Air รุ่น SEQ18A', price: 1299, monthSub: 23, imageUrl: 'assets/images/product15.jpg' },
    { name: 'แอร์อินเวอร์เตอร์ LG DUALCOOL AI Air รุ่น SEQ24A', price: 1399, monthSub: 24, imageUrl: 'assets/images/product16.jpg' },
    { name: 'แอร์อินเวอร์เตอร์ LG DUALCOOL AI Air รุ่น SEQ24A', price: 1399, monthSub: 24, imageUrl: 'assets/images/product17.jpg' },
    { name: 'แอร์อินเวอร์เตอร์ 9,200 BTU รุ่น IEQ10E LG DUALCOOL Prime', price: 999, monthSub: 18, imageUrl: 'assets/images/product18.jpg' },
    { name: 'แอร์อินเวอร์เตอร์ 12,000 BTU รุ่น IEQ13E LG DUALCOOL Prime', price: 1099, monthSub: 20, imageUrl: 'assets/images/product19.jpg' },
    { name: 'แอร์อินเวอร์เตอร์ 12,000 BTU รุ่น IEQ13E LG DUALCOOL Prime', price: 1099, monthSub: 20, imageUrl: 'assets/images/product20.jpg' },
    { name: 'แอร์อินเวอร์เตอร์ 21,800 BTU รุ่น IEQ24E LG DUALCOOL Prime', price: 1499, monthSub: 24, imageUrl: 'assets/images/product21.jpg' }
  ];


  goToProductDetail(product: any) {
    // Navigate to the product detail page with the product data
    console.log('Navigating to product detail for:', product);
    // Here you would typically use a router to navigate to the product detail page
    // For example: this.router.navigate(['/product-detail', product.id]);
  }
}

