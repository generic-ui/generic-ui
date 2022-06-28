import { DomainEventType, MultiDomainEventHandler } from '@generic-ui/hermes';
import { SchemaCssClassesRepository } from './schema.css-classes.repository';
import { SchemaId } from '../../core/schema.id';
import { SchemaThemeSetEvent } from '../../core/theme/schema-theme-set.event';
import { RowColoringSetEvent } from '../../core/row-coloring/row-coloring-set.event';
import { SchemaHorizontalGridSetEvent } from '../../core/grid/horizontal/schema-horizontal-grid-set.event';
import { SchemaVerticalGridSetEvent } from '../../core/grid/vertical/schema-vertical-grid-set.event';
import { SchemaRowColoring } from '../../api/row-coloring/schema-row-coloring';
import { SchemaTheme } from '../../api/theme/schema-theme';
export declare type SchemaCssClassesEventType = SchemaThemeSetEvent | RowColoringSetEvent | SchemaHorizontalGridSetEvent | SchemaVerticalGridSetEvent;
export declare class SchemaCssClassesEventHandler implements MultiDomainEventHandler<SchemaId, SchemaCssClassesEventType> {
    private readonly schemaCssClassesRepository;
    rowColoring: SchemaRowColoring;
    horizontalGrid: boolean;
    verticalGrid: boolean;
    schemaTheme: SchemaTheme;
    constructor(schemaCssClassesRepository: SchemaCssClassesRepository);
    static readonly services: (typeof SchemaCssClassesRepository)[];
    forEvents(): Array<DomainEventType<SchemaCssClassesEventType>>;
    handle(event: SchemaCssClassesEventType): void;
    private publish;
}
