import { ChangeDetectorRef, ElementRef, Injector, OnInit } from '@angular/core';
import { FabricDialogService, FabricDrawerService } from '@generic-ui/fabric';
import { FilterContainerRef } from '../../core/api/config/filter-container-ref';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { FilterWarehouse } from '../../core/api/filter.warehouse';
import { StructureId } from '../../../core/api/structure.id';
export declare class FilterMenuTriggerComponent extends SmartComponent implements OnInit {
    private readonly injector;
    private readonly drawerService;
    private readonly fabricDialogService;
    private readonly structureId;
    private readonly filterWarehouse;
    private readonly filterContainerRef;
    activeFiltersExist: boolean;
    constructor(detector: ChangeDetectorRef, elementRef: ElementRef, injector: Injector, drawerService: FabricDrawerService, fabricDialogService: FabricDialogService, structureId: StructureId, filterWarehouse: FilterWarehouse, filterContainerRef: FilterContainerRef);
    ngOnInit(): void;
    openDrawer(): void;
    protected getSelectorName(): string;
}
