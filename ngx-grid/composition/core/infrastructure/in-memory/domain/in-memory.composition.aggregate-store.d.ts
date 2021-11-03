import { AggregateStoreRegister, InMemoryAggregateStore } from '@generic-ui/hermes';
import { CompositionAggregate } from '../../../domain/composition.aggregate';
import { InMemoryCompositionStore } from '../in-memory.composition.store';
import { CompositionId } from '../../../api/composition.id';
import * as i0 from "@angular/core";
export declare class InMemoryCompositionAggregateStore extends InMemoryAggregateStore<CompositionId, CompositionAggregate> {
    constructor(inMemoryCompositionStore: InMemoryCompositionStore, aggregateStoreRegister: AggregateStoreRegister);
    static ɵfac: i0.ɵɵFactoryDeclaration<InMemoryCompositionAggregateStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InMemoryCompositionAggregateStore>;
}
//# sourceMappingURL=in-memory.composition.aggregate-store.d.ts.map