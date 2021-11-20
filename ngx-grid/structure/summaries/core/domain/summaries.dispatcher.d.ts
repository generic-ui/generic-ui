import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureId } from '../../../core/api/structure.id';
export declare class SummariesDispatcher {
    private readonly commandDispatcher;
    constructor(commandDispatcher: CommandDispatcher);
    setSummariesEnabled(enabled: boolean, structureId: StructureId): void;
}
