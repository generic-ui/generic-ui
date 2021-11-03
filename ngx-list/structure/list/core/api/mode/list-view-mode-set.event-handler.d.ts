import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { ListViewModeArchive } from './list-view.mode.archive';
import { ListViewId } from '../../domain/list-view.id';
import { ListViewModeSetEvent } from '../../domain/mode/list-view-mode-set.event';
import * as i0 from "@angular/core";
export declare class ListViewModeSetEventHandler implements DomainEventHandler<ListViewId, ListViewModeSetEvent> {
    private listViewModeRepository;
    constructor(listViewModeRepository: ListViewModeArchive);
    forEvent(): DomainEventType<ListViewModeSetEvent>;
    handle(event: ListViewModeSetEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListViewModeSetEventHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ListViewModeSetEventHandler>;
}
//# sourceMappingURL=list-view-mode-set.event-handler.d.ts.map