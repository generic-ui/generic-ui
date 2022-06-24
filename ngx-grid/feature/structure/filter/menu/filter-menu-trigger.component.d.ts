import { ChangeDetectorRef, ElementRef, Injector, OnInit } from '@angular/core';
import { FabricDialogService, FabricDrawerService } from '@generic-ui/fabric';
import { FilterContainerRef } from '../../../../core/structure/filter/api/config/filter-container-ref';
import { SmartComponent } from '../../../common/cdk/component/smart-component';
import { FilterWarehouse } from '../../../../core/structure/filter/api/filter.warehouse';
import { StructureId } from '../../../../core/structure/core/api/global/structure.id';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterMenuTriggerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FilterMenuTriggerComponent, "div[gui-filter-menu-trigger]", never, {}, {}, never, never>;
}
