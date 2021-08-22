import { StructureId } from '../../../../../structure/core/domain/structure.id';
import { CompositionCommand } from '../../composition.command';
export declare class SetCompositionContainerWidthCommand extends CompositionCommand {
    private readonly structureId;
    private readonly width;
    constructor(structureId: StructureId, width: number);
    getWidth(): number;
}
