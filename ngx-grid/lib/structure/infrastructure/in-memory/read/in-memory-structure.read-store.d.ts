import { InMemoryReadModelStore } from '@generic-ui/hermes';
import { StructureReadModelRoot } from '../../../read/structure/structure.read-model-root';
import { StructureAggregate } from '../../../domain/structure/structure.aggregate';
import { InMemoryStructureStore } from '../in-memory.structure.store';
import { StructureReadModelRootConverter } from '../../../read/structure/structure.read-model-root-converter';
import { StructureReadModelRootId } from '../../../read/structure/structure.read-model-root-id';
import { StructureId } from '../../../domain/structure.id';
export declare class InMemoryStructureReadStore extends InMemoryReadModelStore<StructureReadModelRootId, StructureReadModelRoot, StructureId, StructureAggregate> {
    private inMemoryProjectStore;
    private structureConverter;
    constructor(inMemoryProjectStore: InMemoryStructureStore, structureConverter: StructureReadModelRootConverter);
    toReadModel(aggregate: StructureAggregate): StructureReadModelRoot;
}
