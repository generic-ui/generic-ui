import { Command } from 'generic-ui-cqrs';
import { StructureId } from 'structure/domain/structure-id';
export declare class SetPresentationResizeWidthCommand extends Command {
    readonly structureId: StructureId;
    readonly enabled: boolean;
    constructor(structureId: StructureId, enabled: boolean);
}
