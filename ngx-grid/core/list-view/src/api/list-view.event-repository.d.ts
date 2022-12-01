import { EventRepository } from '@generic-ui/hermes';
import { ListViewReadModelRootId } from './global/list-view.read-model-root-id';
export declare class ListViewEventRepository extends EventRepository<ListViewReadModelRootId> {
    constructor();
    onModeChange(listViewReadModelRootId: ListViewReadModelRootId): import("@generic-ui/hermes").HermesObservable<import("@generic-ui/hermes").DomainEvent<any>>;
}
