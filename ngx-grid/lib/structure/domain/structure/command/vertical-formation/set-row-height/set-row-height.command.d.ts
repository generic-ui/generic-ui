import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../../structure-id';
export declare class SetRowHeightCommand extends Command {
    readonly structureId: StructureId;
    readonly rowHeight: number;
    constructor(structureId: StructureId, rowHeight: number);
}
