import { StructureAggregate } from 'structure/domain/structure/command/structure.aggregate';
import { AggregateId } from 'generic-ui-cqrs';
export declare abstract class StructureAggregateRepository {
    abstract getById(aggregateId: AggregateId): StructureAggregate;
    abstract save(aggregate: StructureAggregate): void;
}
