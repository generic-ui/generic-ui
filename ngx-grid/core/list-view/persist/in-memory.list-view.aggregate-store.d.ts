import { InMemoryAggregateStore } from '@generic-ui/hermes';
import { InMemoryListViewStore } from './in-memory.list-view.store';
import { ListViewId } from '../core/list-view.id';
import { ListViewAggregate } from '../domain/list-view.aggregate';
export declare class InMemoryListViewAggregateStore extends InMemoryAggregateStore<ListViewId, ListViewAggregate> {
    constructor(inMemorySchemaStore: InMemoryListViewStore);
    static readonly services: (typeof InMemoryListViewStore)[];
}
