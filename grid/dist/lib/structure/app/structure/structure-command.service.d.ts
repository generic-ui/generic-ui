import { StructureId } from 'structure/domain/structure-id';
import { CommandDispatcher } from 'generic-ui-cqrs';
export declare class StructureCommandService {
    private readonly commandDispatcher;
    constructor(commandDispatcher: CommandDispatcher);
    init(structureId?: StructureId): void;
}
