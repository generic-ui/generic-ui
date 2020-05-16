import { Type } from '@angular/core';
import { AggregateEvent, AggregateRoot } from '@generic-ui/hermes';
import { ListViewId } from './list-view.id';
import { ListViewMode } from './mode/list-view-mode';
import { SelectorVisibility } from './mode/selector/selector-visibility';
export declare class ListViewAggregate extends AggregateRoot<ListViewId> {
    mode: ListViewMode;
    selectorVisibility: SelectorVisibility;
    constructor(listViewId: ListViewId);
    createEvent(): Type<AggregateEvent<ListViewId>>;
    setMode(mode: ListViewMode): void;
    toggleModeSelector(enabled: boolean): void;
    private initSelectorVisibility;
    private emitEventAfterSelectorVisibilityChange;
}
