import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink } from '@angular/router';
import { MatSlideToggleModule} from '@angular/material/slide-toggle'
import { ToggleComponent } from '../toggle/toggle.component';

/**
 * @title Basic use of the tab nav bar
 */
@Component({
    selector: 'tab-nav-bar',
    templateUrl: './tab-nav-bar.component.html',
    styleUrls: ['./tab-nav-bar.component.css'],
    imports: [CommonModule, MatTabsModule, MatButtonModule, MatSlideToggleModule, RouterLink, ToggleComponent]
})
export class TabNavBarComponent {
  @Output() toggleDarkMode = new EventEmitter();

  links = [
    { label: 'Home', path: '' },
    { label: 'Projects', path: 'projects' },
  ];
  activeLink = this.links[0];
  
  onToggleDarkMode(value: string): void {
    if (value == 'on') {
      document.body.classList.add('dark-mode');
      this.toggleDarkMode.emit('on');  
    } else {
      document.body.classList.remove('dark-mode');
      this.toggleDarkMode.emit('off');
    }
  }
}
