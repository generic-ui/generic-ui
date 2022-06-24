import { InMemoryStore } from '@generic-ui/hermes';
import { ListViewId } from '../../domain/list-view.id';
import { ListViewAggregate } from '../../domain/list-view.aggregate';
export declare class InMemoryListViewStore extends InMemoryStore<ListViewId, ListViewAggregate> {
}
