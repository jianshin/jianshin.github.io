import { Component } from '@angular/core';
import { ExpansionPanelComponent } from '../expansion-panel/expansion-panel.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ExpansionPanelComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  
}
