import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../../structure/core/domain/structure.id';
export declare class SetCompositionResizeWidthCommand extends Command {
    private readonly structureId;
    private readonly enabled;
    constructor(structureId: StructureId, enabled: boolean);
    getEnabled(): boolean;
}
