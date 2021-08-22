import { StructureId } from '../../../../core/domain/structure.id';
import { StructureCommand } from '../../../../core/domain/structure.command';
export declare class SetRowHeightCommand extends StructureCommand {
    private readonly rowHeight;
    constructor(structureId: StructureId, rowHeight: number);
    getRowHeight(): number;
}
