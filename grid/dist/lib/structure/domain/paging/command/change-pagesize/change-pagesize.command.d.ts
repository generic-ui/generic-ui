import { StructureId } from 'structure/domain/structure-id';
import { Command } from 'generic-ui-cqrs';
export declare class ChangePagesizeCommand extends Command {
    readonly structureId: StructureId;
    readonly pageSize: number;
    constructor(structureId: StructureId, pageSize: number);
}
