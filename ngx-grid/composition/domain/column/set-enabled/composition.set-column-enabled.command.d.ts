import { Command } from '@generic-ui/hermes';
import { CompositionId } from '../../composition.id';
import { ColumnId } from '../column.id';
export declare class CompositionSetColumnEnabledCommand extends Command {
    readonly compositionId: CompositionId;
    private readonly columnId;
    private readonly enabled;
    constructor(compositionId: CompositionId, columnId: ColumnId, enabled: boolean);
    getColumnId(): ColumnId;
    isEnabled(): boolean;
}
