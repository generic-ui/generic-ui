import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { ListViewSelectorRepository } from './list-view.selector.repository';
import { ListViewId } from '../../list-view.id';
import { ListViewSelectorToggledEvent } from '../../../domain/mode/selector/list-view-selector-toggled.event';
export declare class ListViewSelectorToggledEventHandler implements DomainEventHandler<ListViewId, ListViewSelectorToggledEvent> {
    private listViewSelectorRepository;
    constructor(listViewSelectorRepository: ListViewSelectorRepository);
    forEvent(): DomainEventType<ListViewSelectorToggledEvent>;
    handle(event: ListViewSelectorToggledEvent): void;
}
