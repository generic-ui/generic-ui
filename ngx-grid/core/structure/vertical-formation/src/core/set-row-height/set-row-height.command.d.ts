import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
import { StructureCommand } from '../../../../structure-core/src/core/structure.command';
export declare class SetRowHeightCommand extends StructureCommand {
    private readonly rowHeight;
    constructor(structureId: StructureId, rowHeight: number);
    getRowHeight(): number;
}
