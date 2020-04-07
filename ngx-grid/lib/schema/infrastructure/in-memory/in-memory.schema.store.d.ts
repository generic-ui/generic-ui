import { InMemoryStore } from '@generic-ui/hermes';
import { SchemaId } from '../../domain/schema.id';
import { SchemaAggregate } from '../../domain/schema.aggregate';
export declare class InMemorySchemaStore extends InMemoryStore<SchemaId, SchemaAggregate> {
}
