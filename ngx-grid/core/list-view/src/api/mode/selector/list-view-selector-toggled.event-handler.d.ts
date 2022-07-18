import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { ListViewSelectorArchive } from './list-view.selector.archive';
import { ListViewId } from '../../../core/list-view.id';
import { ListViewSelectorToggledEvent } from '../../../core/mode/selector/list-view-selector-toggled.event';
export declare class ListViewSelectorToggledEventHandler implements DomainEventHandler<ListViewId, ListViewSelectorToggledEvent> {
    private readonly listViewSelectorArchive;
    constructor(listViewSelectorArchive: ListViewSelectorArchive);
    static readonly services: (typeof ListViewSelectorArchive)[];
    forEvent(): DomainEventType<ListViewSelectorToggledEvent>;
    handle(event: ListViewSelectorToggledEvent): void;
}
