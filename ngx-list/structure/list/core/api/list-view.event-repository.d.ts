import { DomainEventBus, EventRepository } from '@generic-ui/hermes';
import { ListViewId } from './list-view.id';
import { ListViewReadModelRootId } from './read/list-view.read-model-root-id';
export declare class ListViewEventRepository extends EventRepository<ListViewReadModelRootId, ListViewId> {
    constructor(domainEventBus: DomainEventBus);
    onModeChange(listViewReadModelRootId: ListViewReadModelRootId): import("rxjs").Observable<import("@generic-ui/hermes").DomainEvent<any>>;
}
