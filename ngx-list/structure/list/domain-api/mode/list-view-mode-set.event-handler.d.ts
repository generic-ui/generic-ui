import { Type } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { ListViewModeRepository } from './list-view.mode.repository';
import { ListViewId } from '../../domain/list-view.id';
import { ListViewModeSetEvent } from '../../domain/mode/list-view-mode-set.event';
export declare class ListViewModeSetEventHandler implements DomainEventHandler<ListViewId, ListViewModeSetEvent> {
    private listViewModeRepository;
    constructor(listViewModeRepository: ListViewModeRepository);
    forEvent(): Type<ListViewModeSetEvent>;
    handle(event: ListViewModeSetEvent): void;
}
