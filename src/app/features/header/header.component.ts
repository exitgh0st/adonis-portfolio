import { Component, inject, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ScrollService } from '../../core/services';

interface NavLink {
  label: string;
  sectionId: string;
}

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private scrollService = inject(ScrollService);

  mobileMenuOpen = signal(false);
  activeSection = this.scrollService.activeSection;

  navLinks: NavLink[] = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Projects', sectionId: 'projects' },
    { label: 'Skills', sectionId: 'skills' },
    { label: 'Experience', sectionId: 'experience' },
    { label: 'Contact', sectionId: 'contact' }
  ];

  scrollToSection(sectionId: string): void {
    this.scrollService.scrollToSection(sectionId);
    this.mobileMenuOpen.set(false);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(value => !value);
  }

  isActive(sectionId: string): boolean {
    return this.activeSection() === sectionId;
  }
}
