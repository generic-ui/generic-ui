import { DomainEventBus, EventRepository } from '@generic-ui/hermes';
import { ListViewId } from '../domain/list-view.id';
import { ListViewReadModelRootId } from './list-view.read-model-root-id';
export declare class ListViewEventRepository extends EventRepository<ListViewReadModelRootId, ListViewId> {
    constructor(domainEventBus: DomainEventBus);
    onModeChange(listViewReadModelRootId: ListViewReadModelRootId): import("@generic-ui/hermes").HermesObservable<import("@generic-ui/hermes").DomainEvent<any>>;
}
