import { Component, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { SectionContainerComponent } from '../../shared/components/section-container/section-container.component';
import { PortfolioDataService } from '../../core/services';
import { AnimateOnScrollDirective } from '../../shared/directives';

@Component({
  selector: 'app-contact',
  imports: [
    SectionContainerComponent,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    AnimateOnScrollDirective
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private portfolioData = inject(PortfolioDataService);
  private platformId = inject(PLATFORM_ID);

  profile = this.portfolioData.profile;

  copyEmail(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const email = this.profile().email;
    navigator.clipboard.writeText(email).then(() => {
      // Could show a snackbar here
      console.log('Email copied to clipboard!');
    });
  }
}
