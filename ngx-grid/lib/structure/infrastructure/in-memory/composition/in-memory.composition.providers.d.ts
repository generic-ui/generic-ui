import { InMemoryCompositionAggregateStore } from './command/in-memory.composition.aggregate-store';
import { CompositionAggregateRepository } from '../../../domain/composition/command/composition.aggregate-repository';
import { InMemoryCompositionAggregateRepository } from './command/in-memory.composition.aggregate-repository';
import { InMemoryCompositionQueryStore } from './query/in-memory.composition.query-store';
import { CompositionRepository } from '../../../domain/composition/query/composition.repository';
import { InMemoryCompositionRepository } from './query/in-memory.composition.repository';
import { InMemoryCompositionStore } from './in-memory.composition.store';
export declare const inMemoryCompositionCommandProviders: (typeof InMemoryCompositionAggregateStore | {
    provide: typeof CompositionAggregateRepository;
    useClass: typeof InMemoryCompositionAggregateRepository;
})[];
export declare const inMemoryCompositionQueryProviders: (typeof InMemoryCompositionQueryStore | {
    provide: typeof CompositionRepository;
    useClass: typeof InMemoryCompositionRepository;
})[];
export declare const inMemoryCompositionProviders: (typeof InMemoryCompositionStore)[];
