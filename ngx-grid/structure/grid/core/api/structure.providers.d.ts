import { Provider } from '@angular/core';
import { StructureCommandInvoker } from '../../../core/api/structure.command-invoker';
import { StructureReadModelRootConverter } from './read/structure.read-model-root-converter';
import { StructureAggregateFactory } from '../../../core/domain/structure.aggregate-factory';
import { StructureWarehouse } from './structure.warehouse';
import { StructureDomainCommandInvoker } from '../../../core/domain/structure.domain-command-invoker';
import { StructureInitialValuesReadyArchive } from '../../../core/api/structure.initial-values-ready.archive';
export declare const structureCommandHandlers: Array<Provider>;
export declare const structureDomainEventHandlers: Provider[][];
export declare const structureProviders: (typeof StructureInitialValuesReadyArchive | typeof StructureWarehouse | typeof StructureReadModelRootConverter | typeof import("../../../core/infrastructure/in-memory/in-memory.structure.store").InMemoryStructureStore[] | typeof StructureAggregateFactory | (typeof import("../../../core/infrastructure/in-memory/domain/in-memory.structure.aggregate-store").InMemoryStructureAggregateStore | {
    provide: typeof import("../../../core/domain/structure-aggregate.repository").StructureAggregateRepository;
    useClass: typeof import("../../../core/infrastructure/in-memory/domain/in-memory.structure-aggregate.repository").InMemoryStructureAggregateRepository;
})[][] | (typeof import("../../../core/infrastructure/in-memory/api/in-memory-structure.read-store").InMemoryStructureReadStore | {
    provide: typeof import("./read/structure.read-model-repository").StructureReadModelRepository;
    useClass: typeof import("../../../core/infrastructure/in-memory/api/in-memory.structure.repository").InMemoryStructureRepository;
})[][] | {
    provide: typeof StructureCommandInvoker;
    useClass: typeof StructureDomainCommandInvoker;
})[];
//# sourceMappingURL=structure.providers.d.ts.map