import { AggregateEvent, AggregateEventType, AggregateRoot } from '@generic-ui/hermes';
import { ListViewId } from '../core/list-view.id';
import { ListViewMode } from './mode/list-view-mode';
export declare class ListViewAggregate extends AggregateRoot<ListViewId> {
    private mode;
    private selectorVisibility;
    constructor(listViewId: ListViewId);
    createEvent(): AggregateEventType<AggregateEvent<ListViewId>>;
    setMode(mode: ListViewMode): void;
    toggleModeSelector(enabled: boolean): void;
    private initSelectorVisibility;
    private emitEventAfterSelectorVisibilityChange;
}
