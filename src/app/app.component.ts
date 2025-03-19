import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { TabNavBarComponent } from './tab-nav-bar/tab-nav-bar.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
    selector: 'app-root',
    imports: [
        CommonModule,
        RouterOutlet,
        TabNavBarComponent,
        // BrowserAnimationsModule
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  title = 'Angular Project';

  ngOnInit(): void {
    this.createSakura();
    this.adjustTransparencyOnOverlap();
  }

  createSakura() {
    const container = document.querySelector('.sakura-container');

    setInterval(() => {
      const sakura = document.createElement('div');
      sakura.classList.add('sakura');
      sakura.style.left = `${Math.random() * 100}vw`;
      sakura.style.animationDuration = `${25 + Math.random() * 10}s`;
      container?.appendChild(sakura);

      setTimeout(() => {
        sakura.remove();
      }, 25000);
    }, 2000);
  }

  adjustTransparencyOnOverlap() {
    const textElements = document.querySelectorAll("p"); // Target text elements
    console.log(textElements.length)
  
    setInterval(() => {
      document.querySelectorAll('.cloud').forEach(sakura => {
        let isOverText = false;
  
        textElements.forEach(text => {
          const textRect = text.getBoundingClientRect();
          const sakuraRect = sakura.getBoundingClientRect();
  
          if (
            sakuraRect.top < textRect.bottom &&
            sakuraRect.bottom > textRect.top &&
            sakuraRect.left < textRect.right &&
            sakuraRect.right > textRect.left
          ) {
            isOverText = true;
          }
        });
  
        (sakura as HTMLElement).style.opacity = isOverText ? '0.01' : '0.8'; // Fades when overlapping text
      });
    }, 100);
  }

}
