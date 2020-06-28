import { DomainEventType, MultiDomainEventHandler } from '@generic-ui/hermes';
import { SchemaCssClassesRepository } from './schema.css-classes.repository';
import { SchemaId } from '../../domain/schema.id';
import { SchemaThemeSetEvent } from '../../domain/theme/schema-theme-set.event';
import { RowColoringSetEvent } from '../../domain/coloring/row-coloring-set.event';
import { SchemaHorizontalGridSetEvent } from '../../domain/grid/horizontal/schema-horizontal-grid-set.event';
import { SchemaVerticalGridSetEvent } from '../../domain/grid/vertical/schema-vertical-grid-set.event';
import { SchemaRowColoring } from '../../domain/coloring/schema-row-coloring';
import { SchemaTheme } from '../../domain/theme/schema-theme';
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
}
