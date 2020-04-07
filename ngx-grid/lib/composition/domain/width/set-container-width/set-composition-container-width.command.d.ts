import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../../structure/domain/structure.id';
export declare class SetCompositionContainerWidthCommand extends Command {
    private readonly structureId;
    private readonly width;
    constructor(structureId: StructureId, width: number);
    getWidth(): number;
}
