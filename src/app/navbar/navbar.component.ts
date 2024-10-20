import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isScreenLarge = window.innerWidth > 768;
  isMobileMenuOpen = false;

  // Listen to window resize to adjust the menu visibility for large screens
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.isScreenLarge = (event.target as Window).innerWidth > 768;
    // Close mobile menu when resizing to large screen
    if (this.isScreenLarge) {
      this.isMobileMenuOpen = false;
    }
  }

  // Toggle the mobile dropdown menu
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
