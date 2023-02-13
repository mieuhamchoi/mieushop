import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-widge-one',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Widget-Two</h2>
    Name: {{name}}
  `
})
export class WidgeTwoComponent {
  @Input() name: string | undefined
}
