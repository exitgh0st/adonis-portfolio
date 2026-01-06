import { Component, inject } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { SectionContainerComponent } from '../../shared/components/section-container/section-container.component';
import { PortfolioDataService } from '../../core/services';
import { AnimateOnScrollDirective } from '../../shared/directives';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [
    SectionContainerComponent,
    MatChipsModule,
    MatIconModule,
    AnimateOnScrollDirective,
    KeyValuePipe
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  private portfolioData = inject(PortfolioDataService);

  skillsByCategory = this.portfolioData.skillsByCategory;
  preserveOrder = () => 0;
}
