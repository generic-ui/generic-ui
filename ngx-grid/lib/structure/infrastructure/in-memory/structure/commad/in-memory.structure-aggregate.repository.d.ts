import { AggregateId, Optional } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../../domain/structure/command/structure-aggregate.repository';
import { StructureAggregate } from '../../../../domain/structure/command/structure.aggregate';
import { InMemoryStructureAggregateStore } from './in-memory.structure.aggregate-store';
export declare class InMemoryStructureAggregateRepository extends StructureAggregateRepository {
    private inMemoryStructureAggregateStore;
    constructor(inMemoryStructureAggregateStore: InMemoryStructureAggregateStore);
    getById(aggregateId: AggregateId): Optional<StructureAggregate>;
    save(aggregate: StructureAggregate): void;
}
