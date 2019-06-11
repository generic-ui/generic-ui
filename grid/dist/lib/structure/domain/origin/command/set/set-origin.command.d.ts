import { StructureId } from 'structure/domain/structure-id';
import { Command } from 'generic-ui-cqrs';
export declare class SetOriginCommand extends Command {
    readonly structureId: StructureId;
    readonly items: Array<any>;
    constructor(structureId: StructureId, items?: Array<any>);
}
