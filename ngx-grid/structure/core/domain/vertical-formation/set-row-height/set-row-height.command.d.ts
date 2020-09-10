import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../structure.id';
export declare class SetRowHeightCommand extends Command {
    private readonly rowHeight;
    constructor(structureId: StructureId, rowHeight: number);
    getRowHeight(): number;
}
