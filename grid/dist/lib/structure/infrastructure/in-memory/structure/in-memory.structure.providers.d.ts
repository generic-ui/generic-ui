import { InMemoryStructureAggregateStore } from 'structure/infrastructure/in-memory/structure/commad/in-memory.structure.aggregate-store';
import { StructureAggregateRepository } from 'structure/domain/structure/command/structure-aggregate.repository';
import { InMemoryStructureAggregateRepository } from 'structure/infrastructure/in-memory/structure/commad/in-memory.structure-aggregate.repository';
import { InMemoryStructureQueryStore } from 'structure/infrastructure/in-memory/structure/query/in-memory.structure.query-store';
import { StructureRepository } from 'structure/domain/structure/query/structure.repository';
import { InMemoryStructureRepository } from 'structure/infrastructure/in-memory/structure/query/in-memory.structure.repository';
import { InMemoryStructureStore } from 'structure/infrastructure/in-memory/structure/in-memory.structure.store';
export declare const inMemoryStructureCommandProviders: (typeof InMemoryStructureAggregateStore | {
    provide: typeof StructureAggregateRepository;
    useClass: typeof InMemoryStructureAggregateRepository;
})[];
export declare const inMemoryStructureQueryProviders: (typeof InMemoryStructureQueryStore | {
    provide: typeof StructureRepository;
    useClass: typeof InMemoryStructureRepository;
})[];
export declare const inMemoryStructureProviders: (typeof InMemoryStructureStore)[];
