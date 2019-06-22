import { StructureId } from 'structure/domain/structure-id';
import { Command } from 'generic-ui-cqrs';
export declare class SetFormationCommand extends Command {
    readonly structureId: StructureId;
    readonly payload?: any;
    constructor(structureId: StructureId, payload?: any);
}
