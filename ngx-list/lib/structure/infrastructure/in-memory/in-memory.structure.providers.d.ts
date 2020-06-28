import { InMemoryStructureAggregateStore } from './domain/in-memory.structure.aggregate-store';
import { InMemoryStructureAggregateRepository } from './domain/in-memory.structure-aggregate.repository';
import { StructureAggregateRepository } from '../../domain/structure/structure-aggregate.repository';
import { InMemoryStructureReadStore } from './domain-api/in-memory-structure.read-store';
import { StructureReadModelRepository } from '../../domain-api/read/structure.read-model-repository';
import { InMemoryStructureRepository } from './domain-api/in-memory.structure.repository';
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
