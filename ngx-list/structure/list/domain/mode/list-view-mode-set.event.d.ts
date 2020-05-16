import { DomainEvent } from '@generic-ui/hermes';
import { ListViewId } from '../list-view.id';
import { ListViewMode } from './list-view-mode';
export declare class ListViewModeSetEvent extends DomainEvent<ListViewId> {
    private readonly mode;
    constructor(schemaId: ListViewId, mode: ListViewMode);
    getTheme(): ListViewMode;
}
