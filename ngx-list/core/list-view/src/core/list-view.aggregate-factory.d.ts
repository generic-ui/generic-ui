import { AggregateFactory } from '@generic-ui/hermes';
import { ListViewId } from './list-view.id';
import { ListViewAggregate } from '../domain/list-view.aggregate';
export declare class ListViewAggregateFactory extends AggregateFactory<ListViewId, ListViewAggregate> {
    constructor();
    create(id: ListViewId): ListViewAggregate;
}
