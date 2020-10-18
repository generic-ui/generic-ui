import { ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { SmartComponent } from './smart-component';
export declare abstract class Gate extends SmartComponent {
    protected constructor(cDetector: ChangeDetectorRef);
    isDefined(propertyName: string, simpleChanges: SimpleChanges): boolean;
}
