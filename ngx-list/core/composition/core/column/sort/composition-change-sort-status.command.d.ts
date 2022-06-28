import { CompositionId } from '../../../api/global/composition.id';
import { ChangeSortParams } from '../../../domain/column/sort/change-sort.params';
import { CompositionCommand } from '../../composition.command';
export declare class CompositionChangeSortStatusCommand extends CompositionCommand {
    readonly compositionId: CompositionId;
    private readonly sortParams;
    constructor(compositionId: CompositionId, sortParams: Array<ChangeSortParams>);
    getCompositionId(): CompositionId;
    getSortParams(): Array<ChangeSortParams>;
}
