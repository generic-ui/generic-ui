import { Optional } from '@generic-ui/hermes';
import { InMemoryListViewAggregateStore } from './in-memory.list-view.aggregate-store';
import { ListViewAggregateRepository } from '../../domain/list-view.aggregate-repository';
import { ListViewId } from '../../domain/list-view.id';
import { ListViewAggregate } from '../../domain/list-view.aggregate';
import * as i0 from "@angular/core";
export declare class InMemoryListViewAggregateRepository extends ListViewAggregateRepository {
    private inMemorySchemaAggregateStore;
    constructor(inMemorySchemaAggregateStore: InMemoryListViewAggregateStore);
    findById(listViewId: ListViewId): Optional<ListViewAggregate>;
    save(listViewAggregate: ListViewAggregate): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InMemoryListViewAggregateRepository, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InMemoryListViewAggregateRepository>;
}
//# sourceMappingURL=in-memory.list-view.aggregate-repository.d.ts.map