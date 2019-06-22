import { StructureAggregateRepository } from 'structure/domain/structure/command/structure-aggregate.repository';
import { StructureAggregate } from 'structure/domain/structure/command/structure.aggregate';
import { InMemoryStructureAggregateStore } from 'structure/infrastructure/in-memory/structure/commad/in-memory.structure.aggregate-store';
import { AggregateId } from 'generic-ui-cqrs';
export declare class InMemoryStructureAggregateRepository extends StructureAggregateRepository {
    private inMemoryStructureAggregateStore;
    constructor(inMemoryStructureAggregateStore: InMemoryStructureAggregateStore);
    getById(aggregateId: AggregateId): StructureAggregate;
    save(aggregate: StructureAggregate): void;
}
