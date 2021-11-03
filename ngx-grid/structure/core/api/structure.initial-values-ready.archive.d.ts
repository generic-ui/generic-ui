import { AggregateArchive, AggregateId, HermesObservable } from '@generic-ui/hermes';
export declare class StructureInitialValuesReadyArchive extends AggregateArchive<boolean> {
    static readonly default = false;
    constructor();
    on(aggregateId: AggregateId): HermesObservable<boolean>;
    once(aggregateId: AggregateId): HermesObservable<boolean>;
}
