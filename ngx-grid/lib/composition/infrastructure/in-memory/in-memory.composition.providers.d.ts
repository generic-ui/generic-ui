import { InMemoryCompositionAggregateStore } from './command/in-memory.composition.aggregate-store';
import { CompositionAggregateRepository } from '../../domain/command/composition.aggregate-repository';
import { InMemoryCompositionAggregateRepository } from './command/in-memory.composition.aggregate-repository';
import { InMemoryCompositionReadStore } from './read/in-memory.composition.read-store';
import { CompositionRepository } from '../../domain/read/composition.repository';
import { InMemoryCompositionRepository } from './read/in-memory.composition.repository';
import { InMemoryCompositionStore } from './in-memory.composition.store';
export declare const inMemoryCompositionCommandProviders: (typeof InMemoryCompositionAggregateStore | {
    provide: typeof CompositionAggregateRepository;
    useClass: typeof InMemoryCompositionAggregateRepository;
})[];
export declare const inMemoryCompositionQueryProviders: (typeof InMemoryCompositionReadStore | {
    provide: typeof CompositionRepository;
    useClass: typeof InMemoryCompositionRepository;
})[];
export declare const inMemoryCompositionProviders: (typeof InMemoryCompositionStore)[];
