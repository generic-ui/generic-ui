import { AggregateRepository, Optional } from '@generic-ui/hermes';
import { ListViewId } from './list-view.id';
import { ListViewAggregate } from '../domain/list-view.aggregate';
export declare abstract class ListViewAggregateRepository extends AggregateRepository<ListViewId, ListViewAggregate> {
    abstract findById(listViewId: ListViewId): Optional<ListViewAggregate>;
    abstract save(aggregate: ListViewAggregate): void;
}
