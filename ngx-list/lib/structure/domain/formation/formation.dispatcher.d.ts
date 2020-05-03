import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureId } from '../structure.id';
export declare class FormationDispatcher {
    private commandDispatcher;
    constructor(commandDispatcher: CommandDispatcher);
    setDefault(structureId: StructureId): void;
    toggleSelectedRow(structureId: StructureId, selectedRow: string): void;
}
