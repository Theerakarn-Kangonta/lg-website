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
    { url: 'https://scontent.fbkk6-2.fna.fbcdn.net/v/t39.30808-6/492751744_1151676783669942_7319709361417283664_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=zLIDL-u5XCQQ7kNvwGDSzZw&_nc_oc=AdnZElxNWs4gTLZg3Jvr9XLunrdo3jfPFp7yitnFDRzpWdcYc431wGQ_ea5yrBP3_2s&_nc_zt=23&_nc_ht=scontent.fbkk6-2.fna&_nc_gid=m5qxRnNQpRJvXqPf0xufUg&oh=00_AfHCXPAo68oOF1F6qocofXqTfS1LOFD33Bx0dLR4v43PiQ&oe=6816B248', link: '/promo/1' },
    { url: 'https://scontent.fbkk6-2.fna.fbcdn.net/v/t39.30808-6/492751744_1151676783669942_7319709361417283664_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=zLIDL-u5XCQQ7kNvwGDSzZw&_nc_oc=AdnZElxNWs4gTLZg3Jvr9XLunrdo3jfPFp7yitnFDRzpWdcYc431wGQ_ea5yrBP3_2s&_nc_zt=23&_nc_ht=scontent.fbkk6-2.fna&_nc_gid=m5qxRnNQpRJvXqPf0xufUg&oh=00_AfHCXPAo68oOF1F6qocofXqTfS1LOFD33Bx0dLR4v43PiQ&oe=6816B248', link: '/promo/1' },
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
