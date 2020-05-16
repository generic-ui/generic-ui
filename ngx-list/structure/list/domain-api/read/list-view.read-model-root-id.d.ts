import { ReadModelRootId } from '@generic-ui/hermes';
import { ListViewId } from '../../domain/list-view.id';
export declare class ListViewReadModelRootId extends ReadModelRootId {
    constructor(id: string);
    toAggregateId(): ListViewId;
}
