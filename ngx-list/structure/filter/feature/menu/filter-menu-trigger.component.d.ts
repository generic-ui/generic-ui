import { ChangeDetectorRef, ElementRef, Injector } from '@angular/core';
import { FabricDrawerService } from '@generic-ui/fabric';
import { FilterContainerRef } from '../../core/api/config/filter-container-ref';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import * as i0 from "@angular/core";
export declare class FilterMenuTriggerComponent extends SmartComponent {
    private readonly injector;
    private readonly drawerService;
    private readonly filterContainerRef;
    constructor(detector: ChangeDetectorRef, elementRef: ElementRef, injector: Injector, drawerService: FabricDrawerService, filterContainerRef: FilterContainerRef);
    openDrawer(): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterMenuTriggerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FilterMenuTriggerComponent, "div[gui-filter-menu-trigger]", never, {}, {}, never, never>;
}
//# sourceMappingURL=filter-menu-trigger.component.d.ts.map