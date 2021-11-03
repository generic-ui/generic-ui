import { StructureId } from '../../../../core/api/structure.id';
import { StructureCommand } from '../../../../core/domain/structure.command';
export declare class SetScrollBarPositionCommand extends StructureCommand {
    private readonly position;
    constructor(structureId: StructureId, position: number);
    getPosition(): number;
}
//# sourceMappingURL=set-scroll-bar-position.command.d.ts.map