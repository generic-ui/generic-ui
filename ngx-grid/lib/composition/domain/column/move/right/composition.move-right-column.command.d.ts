import { Command } from '@generic-ui/hermes';
import { CompositionId } from '../../../composition.id';
import { ColumnId } from '../../column.id';
export declare class CompositionMoveRightColumnCommand extends Command {
    private readonly columnId;
    constructor(compositionId: CompositionId, columnId: ColumnId);
    getColumnId(): ColumnId;
}
