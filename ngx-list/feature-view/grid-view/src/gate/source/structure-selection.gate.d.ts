import { StructureId } from '../../../../../core/structure/structure-core/src/api/global/structure.id';
import { SelectionGate } from '../../../../../feature/structure/formation/src/gate/selection.gate';
import { FormationEventRepository } from '../../../../../core/structure/formation/src/api/formation.event-repository';
import { FormationPublisher } from '../../../../../core/structure/formation/src/api/formation.publisher';
import * as i0 from "@angular/core";
export declare class StructureSelectionGate extends SelectionGate {
    selectionGate: void;
    constructor(structureId: StructureId, formationEventService: FormationEventRepository, formationCommandDispatcher: FormationPublisher);
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureSelectionGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StructureSelectionGate, "gui-structure[rowSelection], gui-structure[selectionGate]", never, { "selectionGate": "selectionGate"; }, {}, never, never, false, never>;
}
