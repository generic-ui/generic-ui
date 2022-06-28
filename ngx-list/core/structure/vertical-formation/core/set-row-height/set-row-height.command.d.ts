import { StructureId } from '../../../structure-core/api/global/structure.id';
import { StructureCommand } from '../../../structure-core/core/structure.command';
export declare class SetRowHeightCommand extends StructureCommand {
    private readonly rowHeight;
    constructor(structureId: StructureId, rowHeight: number);
    getRowHeight(): number;
}
