import { StructureId } from '../../../../core/structure/core/api/global/structure.id';
import { SelectionGate } from '../../../../feature/structure/formation/gate/selection.gate';
import { FormationEventRepository } from '../../../../core/structure/formation/api/formation.event-repository';
import { FormationPublisher } from '../../../../core/structure/formation/api/formation.publisher';
import { RowSelectionTypeArchive } from '../../../../core/structure/formation/api/type/row-selection-type.archive';
import * as i0 from "@angular/core";
export declare class StructureSelectionGate extends SelectionGate {
    selectionGate: void;
    constructor(structureId: StructureId, formationEventService: FormationEventRepository, formationCommandDispatcher: FormationPublisher, rowSelectionTypeArchive: RowSelectionTypeArchive);
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureSelectionGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StructureSelectionGate, "gui-structure[rowSelection], gui-structure[selectionGate]", never, { "selectionGate": "selectionGate"; }, {}, never>;
}
