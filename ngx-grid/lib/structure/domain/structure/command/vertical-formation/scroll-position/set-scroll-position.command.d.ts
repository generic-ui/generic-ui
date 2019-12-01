import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../../structure-id';
export declare class SetScrollPositionCommand extends Command {
    readonly structureId: StructureId;
    readonly position: number;
    constructor(structureId: StructureId, position: number);
}
