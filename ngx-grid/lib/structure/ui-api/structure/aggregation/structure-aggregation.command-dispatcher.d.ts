import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureId } from '../../../domain/structure.id';
export declare class StructureAggregationCommandDispatcher {
    private commandDispatcher;
    constructor(commandDispatcher: CommandDispatcher);
    setAggregationEnabled(enabled: boolean, structureId: StructureId): void;
}
