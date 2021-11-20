import { AggregateArchive } from '@generic-ui/hermes';
import { FilterTypeCollectionModel } from '../../api/type/filter-type-collection.model';
export declare class FilterTypeArchive extends AggregateArchive<FilterTypeCollectionModel> {
    static readonly default: FilterTypeCollectionModel;
    constructor();
}
