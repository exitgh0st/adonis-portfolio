import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PortfolioDataService, ScrollService } from '../../core/services';
import { ScrollSpyDirective } from '../../shared/directives';

@Component({
  selector: 'app-hero',
  imports: [MatButtonModule, MatIconModule, ScrollSpyDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  private portfolioData = inject(PortfolioDataService);
  private scrollService = inject(ScrollService);

  profile = this.portfolioData.profile;

  scrollToProjects(): void {
    this.scrollService.scrollToSection('projects');
  }

  scrollToContact(): void {
    this.scrollService.scrollToSection('contact');
  }

  onSectionActive(sectionId: string): void {
    this.scrollService.setActiveSection(sectionId);
  }
}
