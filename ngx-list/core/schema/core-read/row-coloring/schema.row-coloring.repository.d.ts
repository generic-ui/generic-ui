import { DomainEventType, EventDrivenRepository } from '@generic-ui/hermes';
import { SchemaRowColoring } from '../../api/row-coloring/schema-row-coloring';
import { SchemaId } from '../../core/schema.id';
import { RowColoringSetEvent } from '../../core/row-coloring/row-coloring-set.event';
export declare class SchemaRowColoringRepository extends EventDrivenRepository<SchemaId, RowColoringSetEvent, SchemaRowColoring> {
    constructor();
    forEvent(): DomainEventType<RowColoringSetEvent>;
}
