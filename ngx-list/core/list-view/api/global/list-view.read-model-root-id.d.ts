import { ReadModelRootId } from '@generic-ui/hermes';
import { ListViewId } from '../../core/list-view.id';
export declare class ListViewReadModelRootId extends ReadModelRootId {
    constructor(id: string);
    toAggregateId(): ListViewId;
}
