import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { SmartComponent } from '../../../../../common/cdk/component/smart-component';
export declare class StructureTopPanelComponent extends SmartComponent {
    private readonly changeDetectorRef;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef);
    protected getSelectorName(): string;
}
