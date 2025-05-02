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
    { url: 'assets/images/pete1.jpg', link: '/promo/1' },
    { url: 'assets/images/pete2.jpg', link: '/promo/1' },
  ];

  categories = [
    { img: 'https://drive.google.com/u/0/drive-viewer/AKGpihYKI1JLHIEbbA2psILhVotCm6RBG_VKXOnUXDDFZNxujRdsCriRkmRbtTqnNaSZO2cEbN95tA_O9jYxYUeS4LlbPaqWXpLFhBo=s1600-rw-v1', name: 'Shoes' },
    { img: 'assets/cat2.jpg', name: 'Watches' },
    { img: 'assets/cat2.jpg', name: 'Watches' },
    { img: 'assets/cat2.jpg', name: 'Watches' },
    { img: 'assets/cat2.jpg', name: 'Watches' },
    { img: 'assets/cat2.jpg', name: 'Watches' },
    { img: 'assets/cat2.jpg', name: 'Watches' },
    { img: 'assets/cat2.jpg', name: 'Watches' },
    // ...
  ];

  products = [
    { img: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/ede6bb0ae9294625a6f02d8ce1e3e4b2_9366/Own_the_Game_3_Shoes_White_IF4565_01_standard.jpg', name: 'Sneaker X', description: 'Cool and comfy' },
    { img: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/ede6bb0ae9294625a6f02d8ce1e3e4b2_9366/Own_the_Game_3_Shoes_White_IF4565_01_standard.jpg', name: 'Sneaker X', description: 'Cool and comfy' },
    { img: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/ede6bb0ae9294625a6f02d8ce1e3e4b2_9366/Own_the_Game_3_Shoes_White_IF4565_01_standard.jpg', name: 'Sneaker X', description: 'Cool and comfy' },
    { img: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/ede6bb0ae9294625a6f02d8ce1e3e4b2_9366/Own_the_Game_3_Shoes_White_IF4565_01_standard.jpg', name: 'Sneaker X', description: 'Cool and comfy' },
    { img: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/ede6bb0ae9294625a6f02d8ce1e3e4b2_9366/Own_the_Game_3_Shoes_White_IF4565_01_standard.jpg', name: 'Sneaker X', description: 'Cool and comfy' },
    { img: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/ede6bb0ae9294625a6f02d8ce1e3e4b2_9366/Own_the_Game_3_Shoes_White_IF4565_01_standard.jpg', name: 'Sneaker X', description: 'Cool and comfy' },
    { img: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/ede6bb0ae9294625a6f02d8ce1e3e4b2_9366/Own_the_Game_3_Shoes_White_IF4565_01_standard.jpg', name: 'Sneaker X', description: 'Cool and comfy' },
    { img: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/ede6bb0ae9294625a6f02d8ce1e3e4b2_9366/Own_the_Game_3_Shoes_White_IF4565_01_standard.jpg', name: 'Sneaker X', description: 'Cool and comfy' },
    { img: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/ede6bb0ae9294625a6f02d8ce1e3e4b2_9366/Own_the_Game_3_Shoes_White_IF4565_01_standard.jpg', name: 'Sneaker X', description: 'Cool and comfy' },
    { img: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/ede6bb0ae9294625a6f02d8ce1e3e4b2_9366/Own_the_Game_3_Shoes_White_IF4565_01_standard.jpg', name: 'Sneaker X', description: 'Cool and comfy' },
    { img: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/ede6bb0ae9294625a6f02d8ce1e3e4b2_9366/Own_the_Game_3_Shoes_White_IF4565_01_standard.jpg', name: 'Sneaker X', description: 'Cool and comfy' },
    { img: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/ede6bb0ae9294625a6f02d8ce1e3e4b2_9366/Own_the_Game_3_Shoes_White_IF4565_01_standard.jpg', name: 'Sneaker X', description: 'Cool and comfy' },
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
