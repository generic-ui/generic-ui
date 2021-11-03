import { AggregateId, Optional } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../../domain/composition.aggregate-repository';
import { InMemoryCompositionAggregateStore } from './in-memory.composition.aggregate-store';
import { CompositionAggregate } from '../../../domain/composition.aggregate';
import * as i0 from "@angular/core";
export declare class InMemoryCompositionAggregateRepository extends CompositionAggregateRepository {
    private inMemoryCompositionAggregateStore;
    constructor(inMemoryCompositionAggregateStore: InMemoryCompositionAggregateStore);
    findById(aggregateId: AggregateId): Optional<CompositionAggregate>;
    save(aggregate: CompositionAggregate): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InMemoryCompositionAggregateRepository, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InMemoryCompositionAggregateRepository>;
}
//# sourceMappingURL=in-memory.composition.aggregate-repository.d.ts.map