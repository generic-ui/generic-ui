import { DomainEventHandler } from '@generic-ui/hermes';
import { SchemaCssClassesRepository } from './schema.css-classes.repository';
import { SchemaId } from '../../domain/schema.id';
import { SchemaThemeSetEvent } from '../../domain/theme/schema-theme-set.event';
import { RowColoringSetEvent } from '../../domain/coloring/row-coloring-set.event';
import { SchemaHorizontalGridSetEvent } from '../../domain/grid/horizontal/schema-horizontal-grid-set.event';
import { SchemaVerticalGridSetEvent } from '../../domain/grid/vertical/schema-vertical-grid-set.event';
export declare class SchemaCssClassesEventHandler extends DomainEventHandler<SchemaId> {
    private schemaCssClassesRepository;
    coloring: any;
    hgrid: any;
    vgrid: any;
    theme: any;
    constructor(schemaCssClassesRepository: SchemaCssClassesRepository);
    handle(event: SchemaThemeSetEvent | RowColoringSetEvent | SchemaHorizontalGridSetEvent | SchemaVerticalGridSetEvent): void;
    private publish;
}
