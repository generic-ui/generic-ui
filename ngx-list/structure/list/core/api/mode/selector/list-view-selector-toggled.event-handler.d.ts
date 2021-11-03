import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { ListViewSelectorArchive } from './list-view.selector.archive';
import { ListViewId } from '../../../domain/list-view.id';
import { ListViewSelectorToggledEvent } from '../../../domain/mode/selector/list-view-selector-toggled.event';
import * as i0 from "@angular/core";
export declare class ListViewSelectorToggledEventHandler implements DomainEventHandler<ListViewId, ListViewSelectorToggledEvent> {
    private listViewSelectorRepository;
    constructor(listViewSelectorRepository: ListViewSelectorArchive);
    forEvent(): DomainEventType<ListViewSelectorToggledEvent>;
    handle(event: ListViewSelectorToggledEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListViewSelectorToggledEventHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ListViewSelectorToggledEventHandler>;
}
//# sourceMappingURL=list-view-selector-toggled.event-handler.d.ts.map