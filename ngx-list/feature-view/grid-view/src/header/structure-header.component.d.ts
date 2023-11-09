import { ElementRef } from '@angular/core';
import { StructureId } from '../../../../core/structure/structure-core/src/api/global/structure.id';
import { FilterWarehouse } from '../../../../core/structure/filter/src/api/filter.warehouse';
import { CompositionWarehouse } from '../../../../core/composition/src/api/composition.warehouse';
import { VerticalFormationWarehouse } from '../../../../core/structure/vertical-formation/src/api/vertical-formation.warehouse';
import { Group } from '../../../../core/composition/src/api/group/group';
import { CompositionId } from '../../../../core/composition/src/api/global/composition.id';
import { CompositionTemplateWarehouse } from '../../../../feature/composition/src/column/composition.template-warehouse';
import { CompositionTemplateModel } from '../../../../feature/composition/src/column/composition.template.model';
import { FormationWarehouse } from '../../../../core/structure/formation/src/api/formation.warehouse';
import { GuiState } from '../../../../feature/gui-angular/state/gui.state';
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
    private readonly elementRef;
    private readonly state;
    private readonly structureId;
    private readonly compositionId;
    private readonly filterWarehouse;
    private readonly formationWarehouse;
    private readonly structureVerticalFormationWarehouse;
    private readonly compositionTemplateWarehouse;
    private readonly compositionWarehouse;
    readonly state$: HermesObservable<StructureHeaderComponentState>;
    readonly width$: HermesObservable<any>;
    readonly filterHeaderHeight$: HermesObservable<any>;
    constructor(elementRef: ElementRef, state: GuiState<StructureHeaderComponentState>, structureId: StructureId, compositionId: CompositionId, filterWarehouse: FilterWarehouse, formationWarehouse: FormationWarehouse, structureVerticalFormationWarehouse: VerticalFormationWarehouse, compositionTemplateWarehouse: CompositionTemplateWarehouse, compositionWarehouse: CompositionWarehouse);
    protected getSelectorName(): string;
    private selectGroups;
    private selectShowGroups;
    private selectShowSelection;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StructureHeaderComponent, "div[gui-structure-header]", never, {}, {}, never, never, false, never>;
}
