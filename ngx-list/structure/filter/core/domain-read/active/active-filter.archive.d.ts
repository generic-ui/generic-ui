import { AggregateArchive } from '@generic-ui/hermes';
import { ActiveFilterModel } from '../../api/active/active-filter.model';
export declare class ActiveFilterArchive extends AggregateArchive<ReadonlyArray<ActiveFilterModel>> {
    static readonly default: ReadonlyArray<ActiveFilterModel>;
    constructor();
}
