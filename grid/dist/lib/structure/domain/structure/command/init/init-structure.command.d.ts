import { StructureId } from 'structure/domain/structure-id';
import { Command } from 'generic-ui-cqrs';
export declare class InitStructureCommand extends Command {
    readonly structureId: StructureId;
    constructor(structureId: StructureId);
}
