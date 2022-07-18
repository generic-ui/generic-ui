import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { SmartComponent } from '../../../../common/src/cdk/component/lib/src/smart-component';
import * as i0 from "@angular/core";
export declare class SortingSelectorComponent extends SmartComponent {
    sortingOptions: readonly ["Name: A-Z", "Name: Z-A", "Price: Low to High", "Price: High to Low", "None"];
    selectedSorting: "Name: A-Z";
    constructor(detector: ChangeDetectorRef, elementRef: ElementRef);
    changeSorting(sorting: string): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<SortingSelectorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SortingSelectorComponent, "div[gui-sorting-selector]", never, {}, {}, never, never, false>;
}
