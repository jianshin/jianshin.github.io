import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemePalette } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink } from '@angular/router';
import { MatSlideToggleModule} from '@angular/material/slide-toggle'

/**
 * @title Basic use of the tab nav bar
 */
@Component({
    selector: 'tab-nav-bar',
    templateUrl: './tab-nav-bar.component.html',
    styleUrls: ['./tab-nav-bar.component.css'],
    imports: [CommonModule, MatTabsModule, MatButtonModule, MatSlideToggleModule, RouterLink]
})
export class TabNavBarComponent {
  // links = ['About', 'Projects', 'Contact'];
  links = [
    { label: 'Home', path: '' },
    // { label: 'About', path: 'about' },
    { label: 'Projects', path: 'projects' },
    // { label: 'Contact', path: 'contact' }
  ];
  activeLink = this.links[0];
  
  isDarkMode = false; // Default state

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.updateTheme();
  }

  updateTheme() {
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
}
