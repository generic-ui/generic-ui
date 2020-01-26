import { Command } from '@generic-ui/hermes';
import { CompositionId } from '../../../composition-id';
import { ColumnParams } from './column.params';
export declare class SetColumnsCommand extends Command {
    readonly compositionId: CompositionId;
    private readonly columns;
    constructor(compositionId: CompositionId, columns: Array<ColumnParams>);
    getParams(): Array<ColumnParams>;
}
