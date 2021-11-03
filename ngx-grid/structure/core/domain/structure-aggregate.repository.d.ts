import { AggregateRepository, Optional } from '@generic-ui/hermes';
import { StructureAggregate } from './structure.aggregate';
import { StructureId } from '../api/structure.id';
export declare abstract class StructureAggregateRepository extends AggregateRepository<StructureId, StructureAggregate> {
    abstract findById(aggregateId: StructureId): Optional<StructureAggregate>;
    abstract save(aggregate: StructureAggregate): void;
}
//# sourceMappingURL=structure-aggregate.repository.d.ts.map