import { AggregateArchive } from '@generic-ui/hermes';
import { UniqueValuesReadModel } from './unique-values.read-model';
export declare class UniqueValuesArchive extends AggregateArchive<UniqueValuesReadModel> {
    static readonly default: UniqueValuesReadModel;
    constructor();
}
