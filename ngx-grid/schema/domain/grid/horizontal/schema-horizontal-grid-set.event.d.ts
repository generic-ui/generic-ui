import { DomainEvent } from '@generic-ui/hermes';
import { SchemaId } from '../../schema.id';
export declare class SchemaHorizontalGridSetEvent extends DomainEvent<SchemaId> {
    private readonly horizontalGrid;
    constructor(schemaId: SchemaId, horizontalGrid: boolean);
    getHorizontalGrid(): boolean;
}
