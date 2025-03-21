import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
    selector: 'app-expansion-panel',
    imports: [MatExpansionModule],
    templateUrl: './expansion-panel.component.html',
    styleUrl: './expansion-panel.component.css'
})
export class ExpansionPanelComponent {
  panelOpenState = false;
}
