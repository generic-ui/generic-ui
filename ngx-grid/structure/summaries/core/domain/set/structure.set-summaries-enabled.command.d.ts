import { StructureId } from '../../../../core/api/structure.id';
import { StructureCommand } from '../../../../core/domain/structure.command';
export declare class StructureSetSummariesEnabledCommand extends StructureCommand {
    private readonly enabled;
    constructor(structureId: StructureId, enabled: boolean);
    isEnabled(): boolean;
}
//# sourceMappingURL=structure.set-summaries-enabled.command.d.ts.map