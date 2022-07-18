import { Optional } from '@generic-ui/hermes';
import { InMemoryListViewAggregateStore } from './in-memory.list-view.aggregate-store';
import { ListViewAggregateRepository } from '../core/list-view.aggregate-repository';
import { ListViewId } from '../core/list-view.id';
import { ListViewAggregate } from '../domain/list-view.aggregate';
export declare class InMemoryListViewAggregateRepository extends ListViewAggregateRepository {
    private readonly inMemorySchemaAggregateStore;
    constructor(inMemorySchemaAggregateStore: InMemoryListViewAggregateStore);
    static readonly services: (typeof InMemoryListViewAggregateStore)[];
    findById(listViewId: ListViewId): Optional<ListViewAggregate>;
    save(listViewAggregate: ListViewAggregate): void;
}
