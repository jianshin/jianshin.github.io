import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-toggle',
    imports: [
        CommonModule,
    ],
    templateUrl: './toggle.component.html',
    styleUrl: './toggle.component.css',
    animations: [
        trigger('toggleTrigger', [
            state('off', style({ transform: 'translateX(5%)' })),
            state('on', style({ transform: 'translateX(95%)' })),
            transition('on <=> off', [
                animate('120ms ease-in-out')
            ])
        ])
    ]
})

export class ToggleComponent {
    @Input() toggleOn = false;
    @Output() toggledTo = new EventEmitter();

    toggleClick(): any {
        if (this.toggleOn) {
            this.toggleOn = false;
            this.toggledTo.emit('off');
        } else {
            this.toggleOn = true;
            this.toggledTo.emit('on');
        }
    }
}