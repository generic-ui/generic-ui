import { StructureId } from 'structure/domain/structure-id';
import { CommandDispatcher } from 'generic-ui-cqrs';
export declare class OriginDispatcher {
    private commandDispatcher;
    constructor(commandDispatcher: CommandDispatcher);
    setOrigin(structureId: StructureId, items: Array<any>): void;
}
