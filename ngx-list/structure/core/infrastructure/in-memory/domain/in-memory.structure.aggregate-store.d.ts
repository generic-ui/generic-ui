import { AggregateStoreRegister, InMemoryAggregateStore } from '@generic-ui/hermes';
import { StructureAggregate } from '../../../domain/structure.aggregate';
import { InMemoryStructureStore } from '../in-memory.structure.store';
import { StructureId } from '../../../api/structure.id';
import * as i0 from "@angular/core";
export declare class InMemoryStructureAggregateStore extends InMemoryAggregateStore<StructureId, StructureAggregate> {
    constructor(inMemoryStructureStore: InMemoryStructureStore, aggregateStoreRegister: AggregateStoreRegister);
    static ɵfac: i0.ɵɵFactoryDeclaration<InMemoryStructureAggregateStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InMemoryStructureAggregateStore>;
}
//# sourceMappingURL=in-memory.structure.aggregate-store.d.ts.map