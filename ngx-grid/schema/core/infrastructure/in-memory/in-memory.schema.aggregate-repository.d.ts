import { Optional } from '@generic-ui/hermes';
import { SchemaAggregateRepository } from '../../domain/schema.aggregate-repository';
import { SchemaAggregate } from '../../domain/schema.aggregate';
import { SchemaId } from '../../domain/schema.id';
import { InMemorySchemaAggregateStore } from './in-memory.schema.aggregate-store';
import * as i0 from "@angular/core";
export declare class InMemorySchemaAggregateRepository extends SchemaAggregateRepository {
    private inMemorySchemaAggregateStore;
    constructor(inMemorySchemaAggregateStore: InMemorySchemaAggregateStore);
    findById(schemaId: SchemaId): Optional<SchemaAggregate>;
    save(schemaAggregate: SchemaAggregate): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InMemorySchemaAggregateRepository, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InMemorySchemaAggregateRepository>;
}
//# sourceMappingURL=in-memory.schema.aggregate-repository.d.ts.map