import { ElementRef } from '@angular/core';
import { FormationWarehouse } from '../../../../../../core/structure/formation/src/api/formation.warehouse';
import { DynamicallyCreatedComponent } from '../../../../../common/component';
import { StructureId } from '../../../../../../core/structure/structure-core/src/api/global/structure.id';
import { FormationPublisher } from '../../../../../../core/structure/formation/src/api/formation.publisher';
import { FormationCustomSelectId } from '../../../../../../core/structure/formation/src/api/custom/formation.custom-select.id';
import * as i0 from "@angular/core";
export declare class SelectCustomModalComponent extends DynamicallyCreatedComponent {
    private readonly structureId;
    private readonly formationPublisher;
    private readonly formationWarehouse;
    selection$: import("@generic-ui/hermes").HermesObservable<import("../../../../../../core/structure/formation/src/api/custom/formation.custom-selection").FormationCustomSelection>;
    constructor(elRef: ElementRef, structureId: StructureId, formationPublisher: FormationPublisher, formationWarehouse: FormationWarehouse);
    selectCustom(id: FormationCustomSelectId): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectCustomModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectCustomModalComponent, "div[gui-select-custom-modal]", never, {}, {}, never, never, false, never>;
}
