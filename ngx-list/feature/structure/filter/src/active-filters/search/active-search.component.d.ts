import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { SmartComponent } from '../../../../../common/component/src/smart-component';
import * as i0 from "@angular/core";
export declare class ActiveSearchComponent extends SmartComponent {
    private readonly structureId;
    private readonly searchCommandDispatcher;
    private readonly searchWarehouse;
    readonly phrase$: import("@generic-ui/hermes").HermesObservable<string>;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef);
    clearSearch(): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActiveSearchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ActiveSearchComponent, "div[gui-active-search]", never, {}, {}, never, never, false, never>;
}
