import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemePalette } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink } from '@angular/router';

/**
 * @title Basic use of the tab nav bar
 */
@Component({
  selector: 'tab-nav-bar',
  templateUrl: './tab-nav-bar.component.html',
  styleUrls: ['./tab-nav-bar.component.css'],
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatButtonModule, RouterLink],
})
export class TabNavBarComponent {
  links = ['About', 'Projects', 'Contact'];
  activeLink = this.links[0];
  background: ThemePalette = undefined;

  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }
}
