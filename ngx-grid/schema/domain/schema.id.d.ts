import { AggregateId } from '@generic-ui/hermes';
import { SchemaReadModelRootId } from '../domain-api/read/schema.read-model-root-id';
export declare class SchemaId extends AggregateId {
    constructor(id: string);
    toReadModelRootId(): SchemaReadModelRootId;
}
