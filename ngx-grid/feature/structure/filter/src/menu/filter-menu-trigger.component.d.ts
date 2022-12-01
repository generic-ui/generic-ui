import { ChangeDetectorRef, ElementRef, Injector, OnInit } from '@angular/core';
import { FabricDialogService } from '@generic-ui/fabric';
import { SmartComponent } from '../../../../common/src/cdk/component/lib/src/smart-component';
import { FilterWarehouse } from '../../../../../core/structure/filter/src/api/filter.warehouse';
import { StructureId } from '../../../../../core/structure/structure-core/src/api/global/structure.id';
import * as i0 from "@angular/core";
export declare class FilterMenuTriggerComponent extends SmartComponent implements OnInit {
    private readonly injector;
    private readonly fabricDialogService;
    private readonly structureId;
    private readonly filterWarehouse;
    activeFiltersExist: boolean;
    constructor(detector: ChangeDetectorRef, elementRef: ElementRef, injector: Injector, fabricDialogService: FabricDialogService, structureId: StructureId, filterWarehouse: FilterWarehouse);
    ngOnInit(): void;
    openDrawer(): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterMenuTriggerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FilterMenuTriggerComponent, "div[gui-filter-menu-trigger]", never, {}, {}, never, never, false, never>;
}
