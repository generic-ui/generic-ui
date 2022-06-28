import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { ListViewModeArchive } from './list-view.mode.archive';
import { ListViewId } from '../../core/list-view.id';
import { ListViewModeSetEvent } from '../../core/mode/list-view-mode-set.event';
export declare class ListViewModeSetEventHandler implements DomainEventHandler<ListViewId, ListViewModeSetEvent> {
    private readonly listViewModeArchive;
    constructor(listViewModeArchive: ListViewModeArchive);
    static readonly services: (typeof ListViewModeArchive)[];
    forEvent(): DomainEventType<ListViewModeSetEvent>;
    handle(event: ListViewModeSetEvent): void;
}
