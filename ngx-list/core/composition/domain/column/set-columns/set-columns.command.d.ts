import { CompositionId } from '../../../api/global/composition.id';
import { ColumnParams } from './column.params';
import { CompositionCommand } from '../../composition.command';
export declare class SetColumnsCommand extends CompositionCommand {
    readonly compositionId: CompositionId;
    private readonly columns;
    constructor(compositionId: CompositionId, columns: Array<ColumnParams>);
    getParams(): Array<ColumnParams>;
}
