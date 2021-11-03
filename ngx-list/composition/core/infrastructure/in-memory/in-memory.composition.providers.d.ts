import { InMemoryCompositionAggregateStore } from './domain/in-memory.composition.aggregate-store';
import { CompositionAggregateRepository } from '../../domain/composition.aggregate-repository';
import { InMemoryCompositionAggregateRepository } from './domain/in-memory.composition.aggregate-repository';
import { InMemoryCompositionReadStore } from './api/in-memory.composition.read-store';
import { CompositionReadModelRootRepository } from '../../domain-read/composition.read-model-root-repository';
import { InMemoryCompositionRepository } from './api/in-memory.composition.repository';
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
//# sourceMappingURL=in-memory.composition.providers.d.ts.map