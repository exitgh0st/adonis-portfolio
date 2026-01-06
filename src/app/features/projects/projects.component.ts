import { Component, inject } from '@angular/core';
import { SectionContainerComponent } from '../../shared/components/section-container/section-container.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { PortfolioDataService } from '../../core/services';
import { AnimateOnScrollDirective } from '../../shared/directives';

@Component({
  selector: 'app-projects',
  imports: [
    SectionContainerComponent,
    ProjectCardComponent,
    AnimateOnScrollDirective
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  private portfolioData = inject(PortfolioDataService);

  projects = this.portfolioData.projects;
}
