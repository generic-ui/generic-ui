import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { SchemaRowColoringRepository } from './schema.row-coloring.repository';
import { SchemaId } from '../../domain/schema.id';
import { RowColoringSetEvent } from '../../domain/coloring/row-coloring-set.event';
export declare class SchemaRowColoringSetEventHandler implements DomainEventHandler<SchemaId, RowColoringSetEvent> {
    private schemaRowColoringRepository;
    constructor(schemaRowColoringRepository: SchemaRowColoringRepository);
    forEvent(): DomainEventType<RowColoringSetEvent>;
    handle(event: RowColoringSetEvent): void;
}
