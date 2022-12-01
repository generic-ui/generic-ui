import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { IconComponent } from '../../../../common/src/cdk/component/lib/src/icon-component';
import * as i0 from "@angular/core";
export declare class SearchIconComponent extends IconComponent {
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef);
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SearchIconComponent, "div[gui-search-icon]", never, {}, {}, never, never, false, never>;
}
