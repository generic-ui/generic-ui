import { DomainEventHandler } from '@generic-ui/hermes';
import { SchemaCssClassesRepository } from './schema.css-classes.repository';
import { SchemaId } from '../../domain/schema.id';
import { SchemaThemeSetEvent } from '../../domain/theme/schema-theme-set.event';
import { RowColoringSetEvent } from '../../domain/coloring/row-coloring-set.event';
import { SchemaHorizontalGridSetEvent } from '../../domain/grid/horizontal/schema-horizontal-grid-set.event';
import { SchemaVerticalGridSetEvent } from '../../domain/grid/vertical/schema-vertical-grid-set.event';
import { SchemaRowColoring } from '../../domain/coloring/schema-row-coloring';
import { SchemaTheme } from '../../domain/theme/schema-theme';
export declare class SchemaCssClassesEventHandler extends DomainEventHandler<SchemaId> {
    private schemaCssClassesRepository;
    rowColoring: SchemaRowColoring;
    horizontalGrid: boolean;
    verticalGrid: boolean;
    schemaTheme: SchemaTheme;
    constructor(schemaCssClassesRepository: SchemaCssClassesRepository);
    handle(event: SchemaThemeSetEvent | RowColoringSetEvent | SchemaHorizontalGridSetEvent | SchemaVerticalGridSetEvent): void;
    private publish;
}
