import { Directive, ElementRef, Output, EventEmitter, OnInit, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appScrollSpy]'
})
export class ScrollSpyDirective implements OnInit, OnDestroy {
  @Output() appScrollSpy = new EventEmitter<string>();

  private platformId = inject(PLATFORM_ID);
  private elementRef = inject(ElementRef);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    // Create intersection observer
    const options = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Section is active when in middle 10% of viewport
      threshold: 0
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (sectionId) {
            this.appScrollSpy.emit(sectionId);
          }
        }
      });
    }, options);

    // Observe the element
    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
