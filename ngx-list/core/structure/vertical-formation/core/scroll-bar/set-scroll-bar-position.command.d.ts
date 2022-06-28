import { StructureId } from '../../../structure-core/api/global/structure.id';
import { StructureCommand } from '../../../structure-core/core/structure.command';
export declare class SetScrollBarPositionCommand extends StructureCommand {
    private readonly position;
    constructor(structureId: StructureId, position: number);
    getPosition(): number;
}
