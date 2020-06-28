import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { SchemaVerticalGridRepository } from './schema.vertical-grid.repository';
import { SchemaId } from '../../domain/schema.id';
import { SchemaVerticalGridSetEvent } from '../../domain/grid/vertical/schema-vertical-grid-set.event';
export declare class SchemaVerticalGridSetEventHandler implements DomainEventHandler<SchemaId, SchemaVerticalGridSetEvent> {
    private schemaVerticalGridRepository;
    constructor(schemaVerticalGridRepository: SchemaVerticalGridRepository);
    forEvent(): DomainEventType<SchemaVerticalGridSetEvent>;
    handle(event: SchemaVerticalGridSetEvent): void;
}
