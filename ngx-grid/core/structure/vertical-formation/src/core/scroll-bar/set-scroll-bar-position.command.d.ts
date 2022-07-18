import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
import { StructureCommand } from '../../../../structure-core/src/core/structure.command';
export declare class SetScrollBarPositionCommand extends StructureCommand {
    private readonly position;
    constructor(structureId: StructureId, position: number);
    getPosition(): number;
}
