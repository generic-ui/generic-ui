import { DomainEventType, EventDrivenRepository } from '@generic-ui/hermes';
import { SchemaId } from '../../core/schema.id';
import { SchemaHorizontalGridSetEvent } from '../../core/grid/horizontal/schema-horizontal-grid-set.event';
export declare class SchemaHorizontalGridRepository extends EventDrivenRepository<SchemaId, SchemaHorizontalGridSetEvent, boolean> {
    constructor();
    forEvent(): DomainEventType<SchemaHorizontalGridSetEvent>;
}
