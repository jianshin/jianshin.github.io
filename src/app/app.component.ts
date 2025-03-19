import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TabNavBarComponent } from './tab-nav-bar/tab-nav-bar.component';

@Component({
    selector: 'app-root',
    imports: [
    CommonModule,
    RouterOutlet,
    TabNavBarComponent,
],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  title = 'Angular Project';

  ngOnInit(): void {
    this.createSakura();
  }
  
  darkMode = false;

  onToggleDarkMode(value: string) {
    if (value == 'on') {
      this.darkMode = true;
    } else {
      this.darkMode = false;
    }
  }

  createSakura() {
    const container = document.querySelector('.sakura-container');

    setInterval(() => {
      const falling_thing = document.createElement('div');
      const item = this.darkMode ? 'rain' : 'sakura';
      falling_thing.classList.add(item);
      falling_thing.style.left = `${Math.random() * 100}vw`;
      falling_thing.style.animationDuration = `${25 + Math.random() * 10}s`;
      container?.appendChild(falling_thing);

      setTimeout(() => {
        falling_thing.remove();
      }, 25000);
    }, 2000);
  }

}
