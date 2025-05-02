import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  standalone: true, // <-- this line is required
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  banners = [
    { url: 'assets/images/12.jpg', link: '/promo/1' },
    // { url: 'assets/images/pete2.jpg', link: '/promo/1' },
  ];

  categories = [
    { img: 'assets/images/water_filter.jpg', name: 'เครื่องกรองน้ำ' },
    { img: 'assets/images/monitor.jpg', name: 'มอนิเตอร์' },
    { img: 'assets/images/tv.jpg', name: 'TV' },
    { img: 'assets/images/vacuum.jpg', name: 'เครื่องดูดฝุ่น' },
    { img: 'assets/images/dishwasher.jpg', name: 'เครื่องล้างจาน' },
    { img: 'assets/images/styler.jpg', name: 'เครื่องถนอมผ้า' },
    { img: 'assets/images/refidge.jpg', name: 'ตู้เย็น' },
    { img: 'assets/images/washing_machine.jpg', name: 'เครื่องซักผ้า' },
    { img: 'assets/images/clothes_dryer.jpg', name: 'เครื่องอบผ้า' },
    { img: 'assets/images/ac.jpg', name: 'เครื่องปรับอากาศ' },
    { img: 'assets/images/dehumidifier.jpg', name: 'เครื่องลดความชื้น' },
    { img: 'assets/images/air_purifier.jpg', name: 'เครื่องฟอกอากาศ' },
  ];

  products = [
    { img: 'assets/images/water_filter2.jpg', name: 'เครื่องกรองน้ำ', description: 'ผ่อนเดือนละ 599.-' },
    { img: 'assets/images/washing_machine.jpg', name: 'เครื่องซักผ้า', description: 'ผ่อนเดือนละ 799.-' },
    { img: 'assets/images/clothes_dryer.jpg', name: 'เครื่องอบผ้า', description: 'ผ่อนเดือนละ 999.-' },
    { img: 'assets/images/tv.jpg', name: 'TV', description: 'ผ่อนเดือนละ 999.-' },

    // ...
  ];

  navLinks = [
    { label: 'Home', icon: 'fas fa-home', route: '/home' },
    { label: 'Products', icon: 'fas fa-box', route: '/products' },
    { label: 'Review', icon: 'fas fa-star', route: '/reviews' },
    { label: 'Connect', icon: 'fas fa-users', route: '/connections' },
  ];

  navigateTo(url: string) {
    // Implement router navigation
  }

  ngAfterViewInit() {
    // Optional: use IntersectionObserver for scroll animations
  }
}
