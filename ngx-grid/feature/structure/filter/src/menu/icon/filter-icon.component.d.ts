import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { IconComponent } from '../../../../../common/src/cdk/component/lib/src/icon-component';
import * as i0 from "@angular/core";
export declare class FilterIconComponent extends IconComponent {
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef);
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FilterIconComponent, "div[gui-filter-icon]", never, {}, {}, never, never, false, never>;
}
