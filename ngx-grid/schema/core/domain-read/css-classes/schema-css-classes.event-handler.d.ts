import { DomainEventType, MultiDomainEventHandler } from '@generic-ui/hermes';
import { SchemaCssClassesRepository } from './schema.css-classes.repository';
import { SchemaId } from '../../domain/schema.id';
import { SchemaThemeSetEvent } from '../../domain/theme/schema-theme-set.event';
import { RowColoringSetEvent } from '../../domain/row-coloring/row-coloring-set.event';
import { SchemaHorizontalGridSetEvent } from '../../domain/grid/horizontal/schema-horizontal-grid-set.event';
import { SchemaVerticalGridSetEvent } from '../../domain/grid/vertical/schema-vertical-grid-set.event';
import { SchemaRowColoring } from '../../api/row-coloring/schema-row-coloring';
import { SchemaTheme } from '../../api/theme/schema-theme';
import * as i0 from "@angular/core";
export declare type SchemaCssClassesEventType = SchemaThemeSetEvent | RowColoringSetEvent | SchemaHorizontalGridSetEvent | SchemaVerticalGridSetEvent;
export declare class SchemaCssClassesEventHandler implements MultiDomainEventHandler<SchemaId, SchemaCssClassesEventType> {
    private schemaCssClassesRepository;
    rowColoring: SchemaRowColoring;
    horizontalGrid: boolean;
    verticalGrid: boolean;
    schemaTheme: SchemaTheme;
    constructor(schemaCssClassesRepository: SchemaCssClassesRepository);
    private publish;
    forEvents(): Array<DomainEventType<SchemaCssClassesEventType>>;
    handle(event: SchemaCssClassesEventType): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SchemaCssClassesEventHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SchemaCssClassesEventHandler>;
}
//# sourceMappingURL=schema-css-classes.event-handler.d.ts.map