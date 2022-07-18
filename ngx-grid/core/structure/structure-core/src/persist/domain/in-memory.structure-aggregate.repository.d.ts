import { Optional } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../core/structure-aggregate.repository';
import { StructureAggregate } from '../../domain/structure.aggregate';
import { InMemoryStructureAggregateStore } from './in-memory.structure.aggregate-store';
import { StructureId } from '../../api/global/structure.id';
export declare class InMemoryStructureAggregateRepository extends StructureAggregateRepository {
    private readonly inMemoryStructureAggregateStore;
    constructor(inMemoryStructureAggregateStore: InMemoryStructureAggregateStore);
    static readonly services: (typeof InMemoryStructureAggregateStore)[];
    findById(aggregateId: StructureId): Optional<StructureAggregate>;
    save(aggregate: StructureAggregate): void;
}
