import { InMemoryCompositionAggregateStore } from './domain/in-memory.composition.aggregate-store';
import { CompositionAggregateRepository } from '../../domain/composition.aggregate-repository';
import { InMemoryCompositionAggregateRepository } from './domain/in-memory.composition.aggregate-repository';
import { InMemoryCompositionReadStore } from './read/in-memory.composition.read-store';
import { CompositionReadModelRootRepository } from '../../read/composition.read-model-root-repository';
import { InMemoryCompositionRepository } from './read/in-memory.composition.repository';
import { InMemoryCompositionStore } from './in-memory.composition.store';
export declare const inMemoryCompositionCommandProviders: (typeof InMemoryCompositionAggregateStore | {
    provide: typeof CompositionAggregateRepository;
    useClass: typeof InMemoryCompositionAggregateRepository;
})[];
export declare const inMemoryCompositionReadModelProviders: (typeof InMemoryCompositionReadStore | {
    provide: typeof CompositionReadModelRootRepository;
    useClass: typeof InMemoryCompositionRepository;
})[];
export declare const inMemoryCompositionProviders: (typeof InMemoryCompositionStore)[];
