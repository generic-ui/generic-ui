import { StructureId } from '../../../../core/domain/structure.id';
import { SelectionGate } from '../../../../source/feature/gate/selection.gate';
import { FormationEventRepository } from '../../../../source/core/api/formation/formation.event-repository';
import { FormationCommandInvoker } from '../../../../source/core/api/formation/formation.command-invoker';
import { RowSelectionTypeArchive } from '../../../../source/core/api/formation/type/row-selection-type.archive';
export declare class StructureSelectionGate extends SelectionGate {
    selectionGate: void;
    constructor(structureId: StructureId, formationEventService: FormationEventRepository, formationCommandDispatcher: FormationCommandInvoker, rowSelectionTypeArchive: RowSelectionTypeArchive);
}
