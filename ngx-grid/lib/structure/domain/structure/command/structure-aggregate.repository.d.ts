import { AggregateId, AggregateRepository } from '@generic-ui/hermes';
import { StructureAggregate } from './structure.aggregate';
export declare abstract class StructureAggregateRepository extends AggregateRepository<StructureAggregate> {
    abstract getById(aggregateId: AggregateId): StructureAggregate;
    abstract save(aggregate: StructureAggregate): void;
}
