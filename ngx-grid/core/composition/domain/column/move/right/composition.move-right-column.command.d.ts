import { CompositionId } from '../../../../api/global/composition.id';
import { ColumnId } from '../../../../api/column/column.id';
import { CompositionCommand } from '../../../composition.command';
export declare class CompositionMoveRightColumnCommand extends CompositionCommand {
    private readonly columnId;
    constructor(compositionId: CompositionId, columnId: ColumnId);
    getColumnId(): ColumnId;
}
