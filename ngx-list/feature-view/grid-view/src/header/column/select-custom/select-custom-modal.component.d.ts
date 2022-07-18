import { FormationWarehouse } from '../../../../../../core/structure/formation/src/api/formation.warehouse';
import { StructureId } from '../../../../../../core/structure/structure-core/src/api/global/structure.id';
import { FormationCustomSelection } from '../../../../../../core/structure/formation/src/api/custom/formation.custom-selection';
import * as i0 from "@angular/core";
export declare class SelectCustomModalComponent {
    private readonly structureId;
    private readonly formationWarehouse;
    selection: FormationCustomSelection;
    rc: import("../../../../../../feature/common/src/cdk/component/lib").ReactiveContext<unknown>;
    constructor(structureId: StructureId, formationWarehouse: FormationWarehouse);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectCustomModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectCustomModalComponent, "ng-component", never, {}, {}, never, never, false>;
}
