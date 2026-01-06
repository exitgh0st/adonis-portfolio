import { Component, Input } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { Skill } from '../../../core/models';

@Component({
  selector: 'app-skill-chip',
  imports: [MatChipsModule],
  templateUrl: './skill-chip.component.html',
  styleUrl: './skill-chip.component.scss'
})
export class SkillChipComponent {
  @Input() skill!: Skill;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
}
