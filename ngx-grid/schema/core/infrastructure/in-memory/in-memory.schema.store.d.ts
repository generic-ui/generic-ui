import { InMemoryStore } from '@generic-ui/hermes';
import { SchemaId } from '../../api/schema.id';
import { SchemaAggregate } from '../../domain/schema.aggregate';
export declare class InMemorySchemaStore extends InMemoryStore<SchemaId, SchemaAggregate> {
}
