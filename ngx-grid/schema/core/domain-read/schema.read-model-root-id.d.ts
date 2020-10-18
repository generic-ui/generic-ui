import { ReadModelRootId } from '@generic-ui/hermes';
import { SchemaId } from '../api/schema.id';
export declare class SchemaReadModelRootId extends ReadModelRootId {
    constructor(id: string);
    toAggregateId(): SchemaId;
}
