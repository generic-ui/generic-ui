import { StructureId } from '../../../../structure/structure-core/api/global/structure.id';
import { CompositionCommand } from '../../composition.command';
export declare class SetCompositionWidthCommand extends CompositionCommand {
    private readonly structureId;
    private readonly width;
    constructor(structureId: StructureId, width: number);
    getWidth(): number;
}
