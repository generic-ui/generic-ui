import { AggregateRepository, Optional } from '@generic-ui/hermes';
import { StructureAggregate } from '../domain/structure.aggregate';
import { StructureId } from '../api/global/structure.id';
export declare abstract class StructureAggregateRepository extends AggregateRepository<StructureId, StructureAggregate> {
    abstract findById(aggregateId: StructureId): Optional<StructureAggregate>;
    abstract save(aggregate: StructureAggregate): void;
}
