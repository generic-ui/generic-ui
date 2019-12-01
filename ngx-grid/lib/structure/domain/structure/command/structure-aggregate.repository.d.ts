import { AggregateId } from '@generic-ui/hermes';
import { StructureAggregate } from './structure.aggregate';
export declare abstract class StructureAggregateRepository {
    abstract getById(aggregateId: AggregateId): StructureAggregate;
    abstract save(aggregate: StructureAggregate): void;
}
