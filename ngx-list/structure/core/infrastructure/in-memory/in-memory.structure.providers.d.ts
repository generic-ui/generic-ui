import { InMemoryStructureAggregateStore } from './domain/in-memory.structure.aggregate-store';
import { InMemoryStructureAggregateRepository } from './domain/in-memory.structure-aggregate.repository';
import { StructureAggregateRepository } from '../../domain/structure-aggregate.repository';
import { InMemoryStructureReadStore } from './api/in-memory-structure.read-store';
import { StructureReadModelRepository } from '../../../grid/core/api/read/structure.read-model-repository';
import { InMemoryStructureRepository } from './api/in-memory.structure.repository';
import { InMemoryStructureStore } from './in-memory.structure.store';
export declare const inMemoryStructureCommandProviders: (typeof InMemoryStructureAggregateStore | {
    provide: typeof StructureAggregateRepository;
    useClass: typeof InMemoryStructureAggregateRepository;
})[];
export declare const inMemoryStructureReadProviders: (typeof InMemoryStructureReadStore | {
    provide: typeof StructureReadModelRepository;
    useClass: typeof InMemoryStructureRepository;
})[];
export declare const inMemoryStructureProviders: (typeof InMemoryStructureStore)[];
//# sourceMappingURL=in-memory.structure.providers.d.ts.map