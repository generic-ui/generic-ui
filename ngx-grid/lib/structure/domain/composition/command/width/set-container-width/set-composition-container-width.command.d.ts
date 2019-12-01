import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../../structure-id';
export declare class SetCompositionContainerWidthCommand extends Command {
    readonly structureId: StructureId;
    readonly width: number;
    constructor(structureId: StructureId, width: number);
}
