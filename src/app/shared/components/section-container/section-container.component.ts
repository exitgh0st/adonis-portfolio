import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-container',
  imports: [],
  templateUrl: './section-container.component.html',
  styleUrl: './section-container.component.scss'
})
export class SectionContainerComponent {
  @Input() id!: string;
  @Input() title?: string;
  @Input() subtitle?: string;
}
