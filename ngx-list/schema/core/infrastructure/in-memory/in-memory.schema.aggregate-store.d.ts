import { AggregateStoreRegister, InMemoryAggregateStore } from '@generic-ui/hermes';
import { SchemaAggregate } from '../../domain/schema.aggregate';
import { InMemorySchemaStore } from './in-memory.schema.store';
import { SchemaId } from '../../domain/schema.id';
import * as i0 from "@angular/core";
export declare class InMemorySchemaAggregateStore extends InMemoryAggregateStore<SchemaId, SchemaAggregate> {
    constructor(inMemorySchemaStore: InMemorySchemaStore, aggregateStoreRegister: AggregateStoreRegister);
    static ɵfac: i0.ɵɵFactoryDeclaration<InMemorySchemaAggregateStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InMemorySchemaAggregateStore>;
}
//# sourceMappingURL=in-memory.schema.aggregate-store.d.ts.map