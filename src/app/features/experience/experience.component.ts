import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { SectionContainerComponent } from '../../shared/components/section-container/section-container.component';
import { PortfolioDataService } from '../../core/services';
import { AnimateOnScrollDirective } from '../../shared/directives';

@Component({
  selector: 'app-experience',
  imports: [
    SectionContainerComponent,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    AnimateOnScrollDirective
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  private portfolioData = inject(PortfolioDataService);

  workExperiences = this.portfolioData.workExperiences;
}
