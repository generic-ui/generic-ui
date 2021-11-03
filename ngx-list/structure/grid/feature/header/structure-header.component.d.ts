import { AfterViewInit, ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { DomainEventBus } from '@generic-ui/hermes';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { CellTemplateWithContext } from '../../../../composition/core/domain-read/definition/cell-template-with-context';
import { StructureId } from '../../../core/api/structure.id';
import { FilterWarehouse } from '../../../filter/core/api/filter.warehouse';
import { CompositionWarehouse } from '../../../../composition/core/api/composition.warehouse';
import { StructureWarehouse } from '../../core/api/structure.warehouse';
import { VerticalFormationWarehouse } from '../../../vertical-formation/core/api/vertical-formation.warehouse';
import { RowSelectionTypeArchive } from '../../../source/core/api/formation/type/row-selection-type.archive';
import { Group } from '../../../../composition/core/api/group/group';
import { CompositionId } from '../../../../composition/core/api/composition.id';
import * as i0 from "@angular/core";
export declare class StructureHeaderComponent extends SmartComponent implements OnInit, AfterViewInit {
    private readonly changeDetectorRef;
    private readonly eventBus;
    private readonly structureId;
    private readonly compositionId;
    private readonly filterWarehouse;
    private readonly structureWarehouse;
    private readonly rowSelectionTypeArchive;
    private readonly structureVerticalFormationWarehouse;
    private readonly compositionWarehouse;
    containerRef: ElementRef;
    filtersRef: ElementRef;
    headerColumns: Array<CellTemplateWithContext>;
    filterRowEnabled: boolean;
    checkboxSelection: boolean;
    groups: Array<Group>;
    showGroups: boolean;
    private readonly styleModifier;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, eventBus: DomainEventBus, structureId: StructureId, compositionId: CompositionId, filterWarehouse: FilterWarehouse, structureWarehouse: StructureWarehouse, rowSelectionTypeArchive: RowSelectionTypeArchive, structureVerticalFormationWarehouse: VerticalFormationWarehouse, compositionWarehouse: CompositionWarehouse);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StructureHeaderComponent, "div[gui-structure-header]", never, {}, {}, never, never>;
}
//# sourceMappingURL=structure-header.component.d.ts.map