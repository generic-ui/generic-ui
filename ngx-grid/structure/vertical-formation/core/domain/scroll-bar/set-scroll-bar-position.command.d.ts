import { StructureId } from '../../../../core/domain/structure.id';
import { StructureCommand } from '../../../../core/domain/structure.command';
export declare class SetScrollBarPositionCommand extends StructureCommand {
    private readonly position;
    constructor(structureId: StructureId, position: number);
    getPosition(): number;
}
