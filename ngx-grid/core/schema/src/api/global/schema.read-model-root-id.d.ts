import { ReadModelRootId } from '@generic-ui/hermes';
import { SchemaId } from '../../core/schema.id';
export declare class SchemaReadModelRootId extends ReadModelRootId {
    constructor(id: string);
    toAggregateId(): SchemaId;
}
