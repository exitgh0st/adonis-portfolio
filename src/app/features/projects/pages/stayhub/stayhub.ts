import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-stayhub',
  imports: [CommonModule],
  templateUrl: './stayhub.html',
  styleUrl: './stayhub.scss',
  standalone: true
})
export class Stayhub implements OnInit {
  private platformId = inject(PLATFORM_ID);

  // Smooth scroll to section
  scrollToSection(sectionId: string): void {
    if (isPlatformBrowser(this.platformId)) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  ngOnInit(): void {
    // Scroll to top when component initializes (only in browser)
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
