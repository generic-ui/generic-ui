import { StructureId } from '../../../../core/api/structure.id';
import { SelectionGate } from '../../../../formation/feature/gate/selection.gate';
import { FormationEventRepository } from '../../../../formation/core/api/formation.event-repository';
import { FormationCommandInvoker } from '../../../../formation/core/api/formation.command-invoker';
import { RowSelectionTypeArchive } from '../../../../formation/core/api/type/row-selection-type.archive';
export declare class StructureSelectionGate extends SelectionGate {
    selectionGate: void;
    constructor(structureId: StructureId, formationEventService: FormationEventRepository, formationCommandDispatcher: FormationCommandInvoker, rowSelectionTypeArchive: RowSelectionTypeArchive);
}
