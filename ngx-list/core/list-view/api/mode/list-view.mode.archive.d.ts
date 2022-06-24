import { ListViewMode } from '../../domain/mode/list-view-mode';
import { AggregateArchive } from '@generic-ui/hermes';
export declare class ListViewModeArchive extends AggregateArchive<ListViewMode> {
    static readonly default = ListViewMode.LIST;
    constructor();
}
