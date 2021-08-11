import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { StaticComponent } from './static-component';
export declare abstract class IconComponent extends StaticComponent {
    protected constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef);
}
