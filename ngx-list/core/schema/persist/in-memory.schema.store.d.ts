import { InMemoryStore } from '@generic-ui/hermes';
import { SchemaAggregate } from '../domain/schema.aggregate';
import { SchemaId } from '../core/schema.id';
export declare class InMemorySchemaStore extends InMemoryStore<SchemaId, SchemaAggregate> {
}
