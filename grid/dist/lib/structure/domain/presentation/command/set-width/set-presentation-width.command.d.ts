import { StructureId } from 'structure/domain/structure-id';
import { Command } from 'generic-ui-cqrs';
export declare class SetPresentationWidthCommand extends Command {
    readonly structureId: StructureId;
    readonly width: number;
    constructor(structureId: StructureId, width: number);
}
