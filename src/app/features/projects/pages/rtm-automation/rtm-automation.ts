import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser, Location } from '@angular/common';

@Component({
  selector: 'app-rtm-automation',
  imports: [CommonModule],
  templateUrl: './rtm-automation.html',
  styleUrl: './rtm-automation.scss',
  standalone: true
})
export class RtmAutomation implements OnInit {
  private platformId = inject(PLATFORM_ID);
  private location = inject(Location);

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    // Scroll to top when component initializes (only in browser)
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
