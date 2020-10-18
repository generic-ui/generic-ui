import { InMemoryReadModelStore } from '@generic-ui/hermes';
import { StructureReadModelRoot } from '../../../../grid/core/domain-read/structure.read-model-root';
import { StructureAggregate } from '../../../domain/structure.aggregate';
import { InMemoryStructureStore } from '../in-memory.structure.store';
import { StructureReadModelRootConverter } from '../../../../grid/core/domain-read/structure.read-model-root-converter';
import { StructureReadModelRootId } from '../../../../grid/core/domain-read/structure.read-model-root-id';
import { StructureId } from '../../../api/structure.id';
export declare class InMemoryStructureReadStore extends InMemoryReadModelStore<StructureReadModelRootId, StructureReadModelRoot, StructureId, StructureAggregate> {
    private inMemoryProjectStore;
    private structureConverter;
    constructor(inMemoryProjectStore: InMemoryStructureStore, structureConverter: StructureReadModelRootConverter);
    toReadModel(aggregate: StructureAggregate): StructureReadModelRoot;
}
