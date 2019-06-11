import { StructureId } from 'structure/domain/structure-id';
import { Command } from 'generic-ui-cqrs';
export declare class SetSchemaCommand extends Command {
    readonly structureId: StructureId;
    readonly height: number;
    constructor(structureId: StructureId, height: number);
}
