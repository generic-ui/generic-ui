import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
import { StructureCommand } from '../../../../structure-core/src/core/structure.command';
export declare class SetEnabledSelectionCommand extends StructureCommand {
    private readonly enabled;
    constructor(structureId: StructureId, enabled: boolean);
    isEnabled(): boolean;
}
