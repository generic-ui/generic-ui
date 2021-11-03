import { DomainEventType, EventDrivenRepository } from '@generic-ui/hermes';
import { SchemaId } from '../../domain/schema.id';
import { SchemaHorizontalGridSetEvent } from '../../domain/grid/horizontal/schema-horizontal-grid-set.event';
import * as i0 from "@angular/core";
export declare class SchemaHorizontalGridRepository extends EventDrivenRepository<SchemaId, SchemaHorizontalGridSetEvent, boolean> {
    constructor();
    forEvent(): DomainEventType<SchemaHorizontalGridSetEvent>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SchemaHorizontalGridRepository, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SchemaHorizontalGridRepository>;
}
//# sourceMappingURL=schema.horizontal-grid.repository.d.ts.map