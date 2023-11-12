import { ElementRef } from '@angular/core';
import { FilterWarehouse } from '../../../../core/structure/filter/src/api/filter.warehouse';
import { Group } from '../../../../core/composition/src/api/group/group';
import { CompositionTemplateWarehouse } from '../../../../feature/composition/src/column/composition.template-warehouse';
import { CompositionTemplateModel } from '../../../../feature/composition/src/column/composition.template.model';
import { FormationWarehouse } from '../../../../core/structure/formation/src/api/formation.warehouse';
import { HermesObservable } from '@generic-ui/hermes';
import { GuiComponent } from '../../../../feature/common/component';
import * as i0 from "@angular/core";
export interface StructureHeaderComponentState {
    headerColumns: ReadonlyArray<CompositionTemplateModel>;
    filterRowEnabled: boolean;
    groups: Array<Group>;
    showGroups: boolean;
    showSelection: boolean;
}
export declare class StructureHeaderComponent extends GuiComponent {
    private readonly filterWarehouse;
    private readonly formationWarehouse;
    private readonly compositionTemplateWarehouse;
    private readonly state;
    private readonly compositionWarehouse;
    private readonly structureId;
    private readonly compositionId;
    private readonly verticalFormationWarehouse;
    readonly state$: HermesObservable<any>;
    readonly width$: HermesObservable<any>;
    readonly filterHeaderHeight$: HermesObservable<any>;
    constructor(elementRef: ElementRef, filterWarehouse: FilterWarehouse, formationWarehouse: FormationWarehouse, compositionTemplateWarehouse: CompositionTemplateWarehouse);
    protected getSelectorName(): string;
    private selectGroups;
    private selectShowGroups;
    private selectShowSelection;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StructureHeaderComponent, "div[gui-structure-header]", never, {}, {}, never, never, false, never>;
}
