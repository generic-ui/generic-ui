import { AggregateId, AggregateRepository, Optional } from '@generic-ui/hermes';
import { StructureAggregate } from './structure.aggregate';
export declare abstract class StructureAggregateRepository extends AggregateRepository<StructureAggregate> {
    abstract getById(aggregateId: AggregateId): Optional<StructureAggregate>;
    abstract save(aggregate: StructureAggregate): void;
}
