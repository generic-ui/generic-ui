import { InMemoryReadModelStore } from '@generic-ui/hermes';
import { SchemaReadModelRoot } from '../../../read/schema.read-model-root';
import { SchemaId } from '../../../domain/schema.id';
import { SchemaAggregate } from '../../../domain/schema.aggregate';
import { SchemaReadModelRootId } from '../../../read/schema.read-model-root-id';
import { InMemorySchemaStore } from '../in-memory.schema.store';
import { SchemaReadModelRootConverter } from '../../../read/schema.read-model-root-converter';
export declare class InMemorySchemaReadModelStore extends InMemoryReadModelStore<SchemaReadModelRootId, SchemaReadModelRoot, SchemaId, SchemaAggregate> {
    private inMemorySchemaStore;
    private schemaReadModelRootConverter;
    constructor(inMemorySchemaStore: InMemorySchemaStore, schemaReadModelRootConverter: SchemaReadModelRootConverter);
    toReadModel(schemaAggregate: SchemaAggregate): SchemaReadModelRoot;
}
