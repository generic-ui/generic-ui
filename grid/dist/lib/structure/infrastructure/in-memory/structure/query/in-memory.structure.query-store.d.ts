import { StructureAggregate } from 'structure/domain/structure/command/structure.aggregate';
import { Structure } from 'structure/domain/structure/query/structure';
import { InMemoryStructureStore } from 'structure/infrastructure/in-memory/structure/in-memory.structure.store';
import { StructureConverter } from 'structure/domain/structure/structure.converter';
import { InMemoryQueryStore } from 'generic-ui-cqrs';
export declare class InMemoryStructureQueryStore extends InMemoryQueryStore<Structure, StructureAggregate> {
    private inMemoryProjectStore;
    private structureConverter;
    constructor(inMemoryProjectStore: InMemoryStructureStore, structureConverter: StructureConverter);
    getRoot(): Structure;
    toQueryModel(aggregate: StructureAggregate): Structure;
}
