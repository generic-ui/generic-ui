import { Injector } from '@angular/core';
import { FabricDrawerService } from '@generic-ui/fabric';
import { FilterContainerRef } from './config/filter-container-ref';
export declare class FilterMenuTriggerComponent {
    private readonly injector;
    private readonly drawerService;
    private readonly filterContainerRef;
    constructor(injector: Injector, drawerService: FabricDrawerService, filterContainerRef: FilterContainerRef);
    openDrawer(): void;
}
