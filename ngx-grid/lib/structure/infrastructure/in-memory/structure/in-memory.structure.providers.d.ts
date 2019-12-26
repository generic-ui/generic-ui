import { InMemoryStructureAggregateStore } from './commad/in-memory.structure.aggregate-store';
import { InMemoryStructureAggregateRepository } from './commad/in-memory.structure-aggregate.repository';
import { StructureAggregateRepository } from '../../../domain/structure/command/structure-aggregate.repository';
import { InMemoryStructureReadStore } from './read/in-memory-structure.read-store';
import { StructureRepository } from '../../../domain/structure/read/structure.repository';
import { InMemoryStructureRepository } from './read/in-memory.structure.repository';
import { InMemoryStructureStore } from './in-memory.structure.store';
export declare const inMemoryStructureCommandProviders: (typeof InMemoryStructureAggregateStore | {
    provide: typeof StructureAggregateRepository;
    useClass: typeof InMemoryStructureAggregateRepository;
})[];
export declare const inMemoryStructureReadProviders: (typeof InMemoryStructureReadStore | {
    provide: typeof StructureRepository;
    useClass: typeof InMemoryStructureRepository;
})[];
export declare const inMemoryStructureProviders: (typeof InMemoryStructureStore)[];
