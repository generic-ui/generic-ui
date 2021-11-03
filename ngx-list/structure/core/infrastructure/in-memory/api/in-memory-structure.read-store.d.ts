import { InMemoryReadModelStore } from '@generic-ui/hermes';
import { StructureReadModelRoot } from '../../../../grid/core/api/read/structure.read-model-root';
import { StructureAggregate } from '../../../domain/structure.aggregate';
import { InMemoryStructureStore } from '../in-memory.structure.store';
import { StructureReadModelRootConverter } from '../../../../grid/core/api/read/structure.read-model-root-converter';
import { StructureReadModelRootId } from '../../../../grid/core/api/read/structure.read-model-root-id';
import { StructureId } from '../../../api/structure.id';
import * as i0 from "@angular/core";
export declare class InMemoryStructureReadStore extends InMemoryReadModelStore<StructureReadModelRootId, StructureReadModelRoot, StructureId, StructureAggregate> {
    private inMemoryProjectStore;
    private structureConverter;
    constructor(inMemoryProjectStore: InMemoryStructureStore, structureConverter: StructureReadModelRootConverter);
    toReadModel(aggregate: StructureAggregate): StructureReadModelRoot;
    static ɵfac: i0.ɵɵFactoryDeclaration<InMemoryStructureReadStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InMemoryStructureReadStore>;
}
//# sourceMappingURL=in-memory-structure.read-store.d.ts.map