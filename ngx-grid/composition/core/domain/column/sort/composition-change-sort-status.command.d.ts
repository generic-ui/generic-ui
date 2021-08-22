import { CompositionId } from '../../composition.id';
import { ChangeSortParams } from './change-sort.params';
import { CompositionCommand } from '../../composition.command';
export declare class CompositionChangeSortStatusCommand extends CompositionCommand {
    readonly compositionId: CompositionId;
    private readonly sortParams;
    constructor(compositionId: CompositionId, sortParams: Array<ChangeSortParams>);
    getCompositionId(): CompositionId;
    getSortParams(): Array<ChangeSortParams>;
}
