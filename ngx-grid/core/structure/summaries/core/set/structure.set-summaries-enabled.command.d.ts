import { StructureId } from '../../../structure-core/api/global/structure.id';
import { StructureCommand } from '../../../structure-core/core/structure.command';
export declare class StructureSetSummariesEnabledCommand extends StructureCommand {
    private readonly enabled;
    constructor(structureId: StructureId, enabled: boolean);
    isEnabled(): boolean;
}
