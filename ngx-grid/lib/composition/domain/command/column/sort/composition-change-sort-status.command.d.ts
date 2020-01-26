import { Command } from '@generic-ui/hermes';
import { CompositionId } from '../../../composition-id';
import { ChangeSortParams } from './change-sort.params';
export declare class CompositionChangeSortStatusCommand extends Command {
    readonly compositionId: CompositionId;
    private readonly sortParams;
    constructor(compositionId: CompositionId, sortParams: Array<ChangeSortParams>);
    getCompositionId(): CompositionId;
    getSortParams(): Array<ChangeSortParams>;
}
