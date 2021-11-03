import { DomainEventType, EventDrivenRepository } from '@generic-ui/hermes';
import { SchemaId } from '../../domain/schema.id';
import { SchemaHorizontalGridSetEvent } from '../../domain/grid/horizontal/schema-horizontal-grid-set.event';
export declare class SchemaHorizontalGridRepository extends EventDrivenRepository<SchemaId, SchemaHorizontalGridSetEvent, boolean> {
    constructor();
    forEvent(): DomainEventType<SchemaHorizontalGridSetEvent>;
}
