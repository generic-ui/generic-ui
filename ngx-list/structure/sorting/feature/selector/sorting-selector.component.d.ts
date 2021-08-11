import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
export declare class SortingSelectorComponent extends SmartComponent {
    sortingOptions: string[];
    selectedSorting: string;
    constructor(detector: ChangeDetectorRef, elementRef: ElementRef);
    changeSorting(sorting: string): void;
    protected getSelectorName(): string;
}
