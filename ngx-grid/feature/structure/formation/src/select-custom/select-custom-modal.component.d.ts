import { ElementRef } from '@angular/core';
import { FormationWarehouse } from '../../../../../core/structure/formation/src/api/formation.warehouse';
import { DynamicallyCreatedComponent } from '../../../../common/src/cdk/component/lib';
import { StructureId } from '../../../../../core/structure/structure-core/src/api/global/structure.id';
import { FormationCustomSelection } from '../../../../../core/structure/formation/src/api/custom/formation.custom-selection';
import { FormationPublisher } from '../../../../../core/structure/formation/src/api/formation.publisher';
import { FormationCustomSelectId } from '../../../../../core/structure/formation/src/api/custom/formation.custom-select.id';
import * as i0 from "@angular/core";
export declare class SelectCustomModalComponent extends DynamicallyCreatedComponent {
    private readonly structureId;
    private readonly formationPublisher;
    private readonly formationWarehouse;
    selection: FormationCustomSelection;
    rc: import("../../../../common/src/cdk/component/lib").ReactiveContext<unknown>;
    constructor(elRef: ElementRef, structureId: StructureId, formationPublisher: FormationPublisher, formationWarehouse: FormationWarehouse);
    ngOnInit(): void;
    selectCustom(id: FormationCustomSelectId): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectCustomModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectCustomModalComponent, "div[gui-select-custom-modal]", never, {}, {}, never, never, false, never>;
}
