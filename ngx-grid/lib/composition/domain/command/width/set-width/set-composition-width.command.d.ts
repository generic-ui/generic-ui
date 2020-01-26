import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../../../structure/domain/structure-id';
export declare class SetCompositionWidthCommand extends Command {
    readonly structureId: StructureId;
    readonly width: number;
    constructor(structureId: StructureId, width: number);
}
