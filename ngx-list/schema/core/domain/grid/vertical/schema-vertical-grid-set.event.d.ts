import { SchemaId } from '../../schema.id';
import { SchemaDomainEvent } from '../../schema.domain-event';
export declare class SchemaVerticalGridSetEvent extends SchemaDomainEvent {
    private readonly verticalGrid;
    constructor(schemaId: SchemaId, verticalGrid: boolean);
    getVerticalGrid(): boolean;
}
