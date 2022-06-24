import { DomainEventType, EventDrivenRepository } from '@generic-ui/hermes';
import { SchemaId } from '../../domain/schema.id';
import { SchemaVerticalGridSetEvent } from '../../domain/grid/vertical/schema-vertical-grid-set.event';
export declare class SchemaVerticalGridRepository extends EventDrivenRepository<SchemaId, SchemaVerticalGridSetEvent, boolean> {
    constructor();
    forEvent(): DomainEventType<SchemaVerticalGridSetEvent>;
}
