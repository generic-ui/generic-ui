import { AggregateId } from '@generic-ui/hermes';
import { SchemaReadModelRootId } from '../api/schema.read-model-root-id';
export declare class SchemaId extends AggregateId {
    constructor(id: string);
    toReadModelRootId(): SchemaReadModelRootId;
}
