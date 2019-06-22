import { StructureId } from 'structure/domain/structure-id';
import { CommandDispatcher } from 'generic-ui-cqrs';
export declare class FormationDispatcher {
    private commandDispatcher;
    constructor(commandDispatcher: CommandDispatcher);
    setDefault(structureId: StructureId): void;
    toggleSelectedRow(structureId: StructureId, selectedRow: string): void;
}
