import { DomainEventType, EventDrivenRepository } from '@generic-ui/hermes';
import { SchemaRowColoring } from '../../api/row-coloring/schema-row-coloring';
import { SchemaId } from '../../domain/schema.id';
import { RowColoringSetEvent } from '../../domain/row-coloring/row-coloring-set.event';
import * as i0 from "@angular/core";
export declare class SchemaRowColoringRepository extends EventDrivenRepository<SchemaId, RowColoringSetEvent, SchemaRowColoring> {
    constructor();
    forEvent(): DomainEventType<RowColoringSetEvent>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SchemaRowColoringRepository, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SchemaRowColoringRepository>;
}
//# sourceMappingURL=schema.row-coloring.repository.d.ts.map