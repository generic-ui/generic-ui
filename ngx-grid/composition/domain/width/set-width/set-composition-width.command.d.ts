import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../../structure/core/domain/structure.id';
export declare class SetCompositionWidthCommand extends Command {
    private readonly structureId;
    private readonly width;
    constructor(structureId: StructureId, width: number);
    getWidth(): number;
}
