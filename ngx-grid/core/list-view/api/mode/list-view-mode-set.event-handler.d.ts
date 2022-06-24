import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { ListViewModeArchive } from './list-view.mode.archive';
import { ListViewId } from '../../domain/list-view.id';
import { ListViewModeSetEvent } from '../../domain/mode/list-view-mode-set.event';
export declare class ListViewModeSetEventHandler implements DomainEventHandler<ListViewId, ListViewModeSetEvent> {
    private readonly listViewModeArchive;
    constructor(listViewModeArchive: ListViewModeArchive);
    static readonly services: (typeof ListViewModeArchive)[];
    forEvent(): DomainEventType<ListViewModeSetEvent>;
    handle(event: ListViewModeSetEvent): void;
}
