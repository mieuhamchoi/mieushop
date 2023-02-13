import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-widge-one',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Widget-One</h2>
    Name: {{name}}
  `
})
export class WidgeOneComponent implements OnChanges {
  @Input() name: string | undefined

  ngOnChanges() {
    console.log("Change input winge one")
  }
}
