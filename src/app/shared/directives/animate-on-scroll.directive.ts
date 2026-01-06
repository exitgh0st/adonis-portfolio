import { Directive, ElementRef, Renderer2, OnInit, OnDestroy, PLATFORM_ID, inject, Input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appAnimateOnScroll]'
})
export class AnimateOnScrollDirective implements OnInit, OnDestroy {
  @Input() animationClass = 'animate-fade-in-up';
  @Input() animationDelay = 0;

  private platformId = inject(PLATFORM_ID);
  private elementRef = inject(ElementRef);
  private renderer = inject(Renderer2);
  private observer?: IntersectionObserver;
  private hasAnimated = false;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      // On server, just show the element
      this.renderer.addClass(this.elementRef.nativeElement, 'visible');
      return;
    }

    // Set initial state
    this.renderer.setStyle(this.elementRef.nativeElement, 'opacity', '0');

    // Apply delay if specified
    if (this.animationDelay > 0) {
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'animation-delay',
        `${this.animationDelay}ms`
      );
    }

    // Create intersection observer
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 // Trigger when 10% of element is visible
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.hasAnimated) {
          this.hasAnimated = true;
          this.renderer.addClass(this.elementRef.nativeElement, this.animationClass);
          this.renderer.addClass(this.elementRef.nativeElement, 'visible');
          this.renderer.setStyle(this.elementRef.nativeElement, 'opacity', '1');

          // Disconnect observer after animation
          if (this.observer) {
            this.observer.unobserve(this.elementRef.nativeElement);
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
