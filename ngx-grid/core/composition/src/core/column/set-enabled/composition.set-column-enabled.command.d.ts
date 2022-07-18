import { CompositionId } from '../../../api/global/composition.id';
import { ColumnId } from '../../../api/column/column.id';
import { CompositionCommand } from '../../composition.command';
export declare class CompositionSetColumnEnabledCommand extends CompositionCommand {
    readonly compositionId: CompositionId;
    private readonly columnId;
    private readonly enabled;
    constructor(compositionId: CompositionId, columnId: ColumnId, enabled: boolean);
    getColumnId(): ColumnId;
    isEnabled(): boolean;
}
