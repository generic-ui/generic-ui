import { StructureId } from '../../../../core/api/structure.id';
import { SelectionGate } from '../../../../source/feature/gate/selection.gate';
import { FormationEventRepository } from '../../../../source/core/api/formation/formation.event-repository';
import { FormationCommandInvoker } from '../../../../source/core/api/formation/formation.command-invoker';
import { RowSelectionTypeArchive } from '../../../../source/core/api/formation/type/row-selection-type.archive';
import * as i0 from "@angular/core";
export declare class StructureSelectionGate extends SelectionGate {
    selectionGate: void;
    constructor(structureId: StructureId, formationEventService: FormationEventRepository, formationCommandDispatcher: FormationCommandInvoker, rowSelectionTypeArchive: RowSelectionTypeArchive);
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureSelectionGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StructureSelectionGate, "gui-structure[rowSelection], gui-structure[selectionGate]", never, { "selectionGate": "selectionGate"; }, {}, never>;
}
//# sourceMappingURL=structure-selection.gate.d.ts.map