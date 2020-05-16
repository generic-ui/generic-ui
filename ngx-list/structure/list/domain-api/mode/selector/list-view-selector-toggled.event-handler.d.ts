import { DomainEventHandler } from '@generic-ui/hermes';
import { ListViewSelectorRepository } from './list-view.selector.repository';
import { ListViewId } from '../../../domain/list-view.id';
import { ListViewSelectorToggledEvent } from '../../../domain/mode/selector/list-view-selector-toggled.event';
export declare class ListViewSelectorToggledEventHandler extends DomainEventHandler<ListViewId, ListViewSelectorToggledEvent> {
    private listViewSelectorRepository;
    constructor(listViewSelectorRepository: ListViewSelectorRepository);
    handle(event: ListViewSelectorToggledEvent): void;
}
