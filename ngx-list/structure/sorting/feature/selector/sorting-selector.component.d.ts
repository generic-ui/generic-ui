import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import * as i0 from "@angular/core";
export declare class SortingSelectorComponent extends SmartComponent {
    sortingOptions: string[];
    selectedSorting: string;
    constructor(detector: ChangeDetectorRef, elementRef: ElementRef);
    changeSorting(sorting: string): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<SortingSelectorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SortingSelectorComponent, "div[gui-sorting-selector]", never, {}, {}, never, never>;
}
//# sourceMappingURL=sorting-selector.component.d.ts.map