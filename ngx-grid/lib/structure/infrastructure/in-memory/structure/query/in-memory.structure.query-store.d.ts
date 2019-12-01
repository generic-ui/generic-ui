import { InMemoryReadModelStore } from '@generic-ui/hermes';
import { Structure } from '../../../../domain/structure/query/structure';
import { StructureAggregate } from '../../../../domain/structure/command/structure.aggregate';
import { InMemoryStructureStore } from '../in-memory.structure.store';
import { StructureConverter } from '../../../../domain/structure/structure.converter';
export declare class InMemoryStructureQueryStore extends InMemoryReadModelStore<Structure, StructureAggregate> {
    private inMemoryProjectStore;
    private structureConverter;
    constructor(inMemoryProjectStore: InMemoryStructureStore, structureConverter: StructureConverter);
    toReadModel(aggregate: StructureAggregate): Structure;
}
