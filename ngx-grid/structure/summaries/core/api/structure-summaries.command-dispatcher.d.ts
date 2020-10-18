import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureId } from '../../../core/api/structure.id';
export declare class StructureSummariesCommandDispatcher {
    private commandDispatcher;
    constructor(commandDispatcher: CommandDispatcher);
    setSummariesEnabled(enabled: boolean, structureId: StructureId): void;
}
