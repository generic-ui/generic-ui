import { InMemoryReadModelStore } from '@generic-ui/hermes';
import { StructureReadModelRoot } from '../../api/read/structure.read-model-root';
import { StructureAggregate } from '../../domain/structure.aggregate';
import { InMemoryStructureStore } from '../in-memory.structure.store';
import { StructureReadModelRootConverter } from '../../api/read/structure.read-model-root-converter';
import { StructureReadModelRootId } from '../../api/read/structure.read-model-root-id';
import { StructureId } from '../../api/global/structure.id';
export declare class InMemoryStructureReadStore extends InMemoryReadModelStore<StructureReadModelRootId, StructureReadModelRoot, StructureId, StructureAggregate> {
    private inMemoryProjectStore;
    private structureConverter;
    constructor(inMemoryProjectStore: InMemoryStructureStore, structureConverter: StructureReadModelRootConverter);
    static readonly services: (typeof InMemoryStructureStore | typeof StructureReadModelRootConverter)[];
    toReadModel(aggregate: StructureAggregate): StructureReadModelRoot;
}
