import { DomainEvent } from '@generic-ui/hermes';
import { SchemaId } from '../../schema.id';
export declare class SchemaVerticalGridSetEvent extends DomainEvent<SchemaId> {
    private readonly verticalGrid;
    constructor(schemaId: SchemaId, verticalGrid: boolean);
    getVerticalGrid(): boolean;
}
