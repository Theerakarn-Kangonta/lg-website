import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  standalone: true, // <-- this line is required
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  
  constructor( public router: Router) {
   
  }
  activeIndex = 0;
  isDragging = false;
  isPaused = false;
  private startX = 0;
  private scrollLeft = 0;
  private categorySectionEl!: HTMLElement;
  @ViewChild('categorySection', { static: true }) set section(el: ElementRef | undefined) {
    this.categorySectionEl = el?.nativeElement ?? null;
  }
  @ViewChild('bannerTrack') bannerTrackRef!: ElementRef;

  banners = [
      { url: 'assets/images/ปก4.jpg', link: '/promo/1' },
      { url: 'assets/images/ปก4.jpg', link: '/promo/1' },
      { url: 'assets/images/ปก4.jpg', link: '/promo/1' },
      { url: 'assets/images/ปก4.jpg', link: '/promo/1' },
      { url: 'assets/images/ปก4.jpg', link: '/promo/1' },
    // { url: 'assets/images/pete2.jpg', link: '/promo/1' },
  ];

  categories = [
    { img: 'assets/images/water_filter.png', name: 'เครื่องกรองน้ำ' },
    { img: 'assets/images/monitor.png', name: 'มอนิเตอร์' },
    { img: 'assets/images/tv.png', name: 'TV' },
    { img: 'assets/images/vacuum.png', name: 'เครื่องดูดฝุ่น' },
    { img: 'assets/images/dishwasher.png', name: 'เครื่องล้างจาน' },
    { img: 'assets/images/styler.png', name: 'เครื่องถนอมผ้า' },
    { img: 'assets/images/refidge.png', name: 'ตู้เย็น' },
    { img: 'assets/images/washing_machine.png', name: 'เครื่องซักผ้า' },
    { img: 'assets/images/clothes_dryer.png', name: 'เครื่องอบผ้า' },
    { img: 'assets/images/ac.png', name: 'เครื่องปรับอากาศ' },
    { img: 'assets/images/dehumidifier.png', name: 'เครื่องลดความชื้น' },
    { img: 'assets/images/air_purifier.png', name: 'เครื่องฟอกอากาศ' },
  ];

  products = [
    { img: 'assets/images/water_filter2.jpg', name: 'เครื่องกรองน้ำ', description: 'ผ่อนเดือนละ 399.-', price: '399.-' ,bestSale: true},
    { img: 'assets/images/washing_machine.jpg', name: 'เครื่องซักผ้า', description: 'ผ่อนเดือนละ 1399.-', price: '1399.-',bestSale: true  },
    { img: 'assets/images/refidge.jpg', name: 'ตู้เย็น', description: 'ผ่อนเดือนละ 349.-', price: '349.-',bestSale: true },
    { img: 'assets/images/tv.jpg', name: 'TV', description: 'ผ่อนเดือนละ 999.-', price: '999.-',bestSale: true },

    // ...
  ];

  navLinks = [
    { label: 'Home', icon: 'fas fa-home', route: '/home' },
    { label: 'Products', icon: 'fas fa-box', route: '/products' },
    { label: 'Review', icon: 'fas fa-star', route: 'reviews' },
    { label: 'Connect', icon: 'fas fa-users', route: '/connections' },
  ];


  ngAfterViewInit() {
    this.onBannerScroll(); // set initial index
  }
  onBannerScroll(): void {
    const track = this.bannerTrackRef.nativeElement;
    const scrollLeft = track.scrollLeft;
    const bannerWidth = track.offsetWidth;
    const index = Math.round(scrollLeft / bannerWidth);
    this.activeIndex = index;
  }

  scrollToBanner(index: number): void {
    this.activeIndex = index;

    const element = document.getElementById('banner-' + index);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        inline: 'start',
        block: 'nearest'  // 👈 prevents vertical scroll
      });
    }
  }

  navigateTo(link: string): void {
    this.router.navigate([link]);
    // your existing navigation logic
  }
  pauseScroll() {
    this.isPaused = true;
  }

  resumeScroll() {
    this.isPaused = false;
  }


  startDrag(event: TouchEvent | MouseEvent) {
    if (!this.categorySectionEl) return;
    this.isDragging = true;
    this.isPaused = true;
    this.startX = this.getX(event) + this.categorySectionEl.scrollLeft;
  
    if (event.cancelable) {
      event.preventDefault();
    }
  }
  
  onDrag(event: TouchEvent | MouseEvent) {
    if (!this.isDragging) return;
    const x = this.getX(event);
    const walk = this.startX - x;
    this.categorySectionEl.scrollLeft = walk;
  }
  
  endDrag() {
    this.isDragging = false;
    this.isPaused = false;
  }
  
  getX(event: MouseEvent | TouchEvent): number {
    return event instanceof TouchEvent ? event.touches[0].clientX : event.clientX;
  }
  get hasBestProducts(): boolean {
    return this.products.some(p => p.bestSale);
  }
}
