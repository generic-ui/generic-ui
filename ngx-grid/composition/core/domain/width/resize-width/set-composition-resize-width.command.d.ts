import { StructureId } from '../../../../../structure/core/api/structure.id';
import { CompositionCommand } from '../../composition.command';
export declare class SetCompositionResizeWidthCommand extends CompositionCommand {
    private readonly structureId;
    private readonly enabled;
    constructor(structureId: StructureId, enabled: boolean);
    getEnabled(): boolean;
}
