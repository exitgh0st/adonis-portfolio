import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ViewportScroller } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private platformId = inject(PLATFORM_ID);
  private viewportScroller = inject(ViewportScroller);

  // Track active section
  private activeSectionSignal = signal<string>('home');
  readonly activeSection = this.activeSectionSignal.asReadonly();

  // Header height offset for smooth scrolling
  private readonly HEADER_OFFSET = 20;

  // Section IDs to track
  private sectionIds = ['home', 'projects', 'skills', 'experience', 'contact'];

  // Flag to track manual scrolling
  private isManualScrolling = false;

  constructor() {
    this.initScrollDetection();
  }

  /**
   * Initialize scroll detection to track active section
   */
  private initScrollDetection(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    // Use passive event listener for better performance
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          this.updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    // Initial check
    this.updateActiveSection();
  }

  /**
   * Update active section based on scroll position
   */
  private updateActiveSection(): void {
    if (!isPlatformBrowser(this.platformId) || this.isManualScrolling) {
      return;
    }

    const scrollPosition = window.pageYOffset + this.HEADER_OFFSET + 100;

    // Find the section that is currently in view
    for (let i = this.sectionIds.length - 1; i >= 0; i--) {
      const sectionId = this.sectionIds[i];
      const element = document.getElementById(sectionId);

      if (element) {
        const offsetTop = element.offsetTop;
        if (scrollPosition >= offsetTop) {
          this.activeSectionSignal.set(sectionId);
          return;
        }
      }
    }

    // Default to first section if no section is found
    this.activeSectionSignal.set(this.sectionIds[0]);
  }

  /**
   * Scroll to a section by ID with smooth behavior
   * @param sectionId - The ID of the section to scroll to
   */
  scrollToSection(sectionId: string): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      // Disable automatic scroll detection during manual navigation
      this.isManualScrolling = true;

      // Immediately update active section
      this.setActiveSection(sectionId);

      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - this.HEADER_OFFSET;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Re-enable automatic detection after scroll animation completes
      // Smooth scroll typically takes 500-800ms, use 1000ms to be safe
      setTimeout(() => {
        this.isManualScrolling = false;
      }, 1000);
    }
  }

  /**
   * Scroll to top of page
   */
  scrollToTop(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    // Disable automatic scroll detection during manual navigation
    this.isManualScrolling = true;

    // Immediately update active section
    this.setActiveSection('home');

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Re-enable automatic detection after scroll animation completes
    setTimeout(() => {
      this.isManualScrolling = false;
    }, 1000);
  }

  /**
   * Set the active section
   * @param sectionId - The ID of the active section
   */
  setActiveSection(sectionId: string): void {
    this.activeSectionSignal.set(sectionId);
  }

  /**
   * Get current scroll position
   */
  getScrollPosition(): number {
    if (!isPlatformBrowser(this.platformId)) {
      return 0;
    }

    return window.pageYOffset || document.documentElement.scrollTop;
  }

  /**
   * Check if element is in viewport
   * @param elementId - The ID of the element to check
   */
  isElementInViewport(elementId: string): boolean {
    if (!isPlatformBrowser(this.platformId)) {
      return false;
    }

    const element = document.getElementById(elementId);
    if (!element) {
      return false;
    }

    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Element is in viewport if at least 50% is visible
    const threshold = rect.height * 0.5;
    return (
      rect.top <= windowHeight - threshold &&
      rect.bottom >= threshold
    );
  }
}
