import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { SchemaHorizontalGridRepository } from './schema.horizontal-grid.repository';
import { SchemaId } from '../../api/schema.id';
import { SchemaHorizontalGridSetEvent } from '../../domain/grid/horizontal/schema-horizontal-grid-set.event';
export declare class SchemaHorizontalGridSetEventHandler implements DomainEventHandler<SchemaId, SchemaHorizontalGridSetEvent> {
    private horizontalGridRepository;
    constructor(horizontalGridRepository: SchemaHorizontalGridRepository);
    forEvent(): DomainEventType<SchemaHorizontalGridSetEvent>;
    handle(event: SchemaHorizontalGridSetEvent): void;
}
