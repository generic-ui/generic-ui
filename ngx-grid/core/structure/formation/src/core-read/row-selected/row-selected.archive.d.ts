import { AggregateArchive } from '@generic-ui/hermes';
import { RowSelectedReadModel } from '../../api/row-selected/row-selected.read-model';
export declare class RowSelectedArchive extends AggregateArchive<RowSelectedReadModel> {
    static default: RowSelectedReadModel;
    constructor();
}
