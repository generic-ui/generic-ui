import { DomainEventType, EventDrivenRepository } from '@generic-ui/hermes';
import { SchemaId } from '../../core/schema.id';
import { SchemaVerticalGridSetEvent } from '../../core/grid/vertical/schema-vertical-grid-set.event';
export declare class SchemaVerticalGridRepository extends EventDrivenRepository<SchemaId, SchemaVerticalGridSetEvent, boolean> {
    constructor();
    forEvent(): DomainEventType<SchemaVerticalGridSetEvent>;
}
