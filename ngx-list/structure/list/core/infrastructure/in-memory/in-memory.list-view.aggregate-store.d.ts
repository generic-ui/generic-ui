import { AggregateStoreRegister, InMemoryAggregateStore } from '@generic-ui/hermes';
import { InMemoryListViewStore } from './in-memory.list-view.store';
import { ListViewId } from '../../domain/list-view.id';
import { ListViewAggregate } from '../../domain/list-view.aggregate';
import * as i0 from "@angular/core";
export declare class InMemoryListViewAggregateStore extends InMemoryAggregateStore<ListViewId, ListViewAggregate> {
    constructor(inMemorySchemaStore: InMemoryListViewStore, aggregateStoreRegister: AggregateStoreRegister);
    static ɵfac: i0.ɵɵFactoryDeclaration<InMemoryListViewAggregateStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InMemoryListViewAggregateStore>;
}
//# sourceMappingURL=in-memory.list-view.aggregate-store.d.ts.map