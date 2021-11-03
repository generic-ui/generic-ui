import { DomainEventType, EventDrivenRepository } from '@generic-ui/hermes';
import { SchemaId } from '../../domain/schema.id';
import { SchemaVerticalGridSetEvent } from '../../domain/grid/vertical/schema-vertical-grid-set.event';
import * as i0 from "@angular/core";
export declare class SchemaVerticalGridRepository extends EventDrivenRepository<SchemaId, SchemaVerticalGridSetEvent, boolean> {
    constructor();
    forEvent(): DomainEventType<SchemaVerticalGridSetEvent>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SchemaVerticalGridRepository, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SchemaVerticalGridRepository>;
}
//# sourceMappingURL=schema.vertical-grid.repository.d.ts.map