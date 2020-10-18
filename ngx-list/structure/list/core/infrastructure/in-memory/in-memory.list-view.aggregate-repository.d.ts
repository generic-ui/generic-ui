import { Optional } from '@generic-ui/hermes';
import { InMemoryListViewAggregateStore } from './in-memory.list-view.aggregate-store';
import { ListViewAggregateRepository } from '../../domain/list-view.aggregate-repository';
import { ListViewId } from '../../api/list-view.id';
import { ListViewAggregate } from '../../domain/list-view.aggregate';
export declare class InMemoryListViewAggregateRepository extends ListViewAggregateRepository {
    private inMemorySchemaAggregateStore;
    constructor(inMemorySchemaAggregateStore: InMemoryListViewAggregateStore);
    getById(listViewId: ListViewId): Optional<ListViewAggregate>;
    save(listViewAggregate: ListViewAggregate): void;
}
