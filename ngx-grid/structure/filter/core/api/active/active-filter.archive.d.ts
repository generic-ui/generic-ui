import { AggregateArchive } from '@generic-ui/hermes';
import { ActiveFilterReadModel } from './active-filter.read-model';
export declare class ActiveFilterArchive extends AggregateArchive<ReadonlyArray<ActiveFilterReadModel>> {
    static readonly default: ReadonlyArray<ActiveFilterReadModel>;
    constructor();
}
