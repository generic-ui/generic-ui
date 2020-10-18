import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { ListViewModeRepository } from './list-view.mode.repository';
import { ListViewId } from '../list-view.id';
import { ListViewModeSetEvent } from '../../domain/mode/list-view-mode-set.event';
export declare class ListViewModeSetEventHandler implements DomainEventHandler<ListViewId, ListViewModeSetEvent> {
    private listViewModeRepository;
    constructor(listViewModeRepository: ListViewModeRepository);
    forEvent(): DomainEventType<ListViewModeSetEvent>;
    handle(event: ListViewModeSetEvent): void;
}
