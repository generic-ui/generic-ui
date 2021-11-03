import { ChangeDetectorRef, ElementRef, Injector } from '@angular/core';
import { FabricDrawerService } from '@generic-ui/fabric';
import { FilterContainerRef } from '../../core/api/config/filter-container-ref';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
export declare class FilterMenuTriggerComponent extends SmartComponent {
    private readonly injector;
    private readonly drawerService;
    private readonly filterContainerRef;
    constructor(detector: ChangeDetectorRef, elementRef: ElementRef, injector: Injector, drawerService: FabricDrawerService, filterContainerRef: FilterContainerRef);
    openDrawer(): void;
    protected getSelectorName(): string;
}
