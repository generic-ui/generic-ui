import { AggregateArchive } from '@generic-ui/hermes';
import { FieldModel } from '../api/field.model';
export declare class FieldArchive extends AggregateArchive<ReadonlyArray<FieldModel>> {
    static readonly default: ReadonlyArray<FieldModel>;
    constructor();
}
