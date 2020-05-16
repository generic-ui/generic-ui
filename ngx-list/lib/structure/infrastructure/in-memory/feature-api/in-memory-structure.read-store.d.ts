import { InMemoryReadModelStore } from '@generic-ui/hermes';
import { StructureReadModelRoot } from '../../../domain-api/read/structure.read-model-root';
import { StructureAggregate } from '../../../domain/structure/structure.aggregate';
import { InMemoryStructureStore } from '../in-memory.structure.store';
import { StructureReadModelRootConverter } from '../../../domain-api/read/structure.read-model-root-converter';
import { StructureReadModelRootId } from '../../../domain-api/read/structure.read-model-root-id';
import { StructureId } from '../../../domain/structure.id';
export declare class InMemoryStructureReadStore extends InMemoryReadModelStore<StructureReadModelRootId, StructureReadModelRoot, StructureId, StructureAggregate> {
    private inMemoryProjectStore;
    private structureConverter;
    constructor(inMemoryProjectStore: InMemoryStructureStore, structureConverter: StructureReadModelRootConverter);
    toReadModel(aggregate: StructureAggregate): StructureReadModelRoot;
}
