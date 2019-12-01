import { InMemoryStructureAggregateStore } from './commad/in-memory.structure.aggregate-store';
import { InMemoryStructureAggregateRepository } from './commad/in-memory.structure-aggregate.repository';
import { StructureAggregateRepository } from '../../../domain/structure/command/structure-aggregate.repository';
import { InMemoryStructureQueryStore } from './query/in-memory.structure.query-store';
import { StructureRepository } from '../../../domain/structure/query/structure.repository';
import { InMemoryStructureRepository } from './query/in-memory.structure.repository';
import { InMemoryStructureStore } from './in-memory.structure.store';
export declare const inMemoryStructureCommandProviders: (typeof InMemoryStructureAggregateStore | {
    provide: typeof StructureAggregateRepository;
    useClass: typeof InMemoryStructureAggregateRepository;
})[];
export declare const inMemoryStructureQueryProviders: (typeof InMemoryStructureQueryStore | {
    provide: typeof StructureRepository;
    useClass: typeof InMemoryStructureRepository;
})[];
export declare const inMemoryStructureProviders: (typeof InMemoryStructureStore)[];
