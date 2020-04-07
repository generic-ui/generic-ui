import { Command } from '@generic-ui/hermes';
import { CompositionId } from '../../../composition.id';
import { ColumnId } from '../../column.id';
export declare class CompositionMoveLeftColumnCommand extends Command {
    readonly compositionId: CompositionId;
    private readonly columnId;
    constructor(compositionId: CompositionId, columnId: ColumnId);
    getColumnId(): ColumnId;
}
