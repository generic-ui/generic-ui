import { SchemaCssClassesRepository } from './css-classes/schema.css-classes.repository';
import { SchemaThemeRepository } from './theme/schema.theme.repository';
import { SchemaHorizontalGridRepository } from './horizontal-grid/schema.horizontal-grid.repository';
import { SchemaRowColoringRepository } from './row-coloring/schema.row-coloring.repository';
import { SchemaVerticalGridRepository } from './vertical-grid/schema.vertical-grid.repository';
import { SchemaReadModelRootId } from '../api/global/schema.read-model-root-id';
import { SchemaTheme } from '../api/theme/schema-theme';
import { SchemaRowColoring } from '../api/row-coloring/schema-row-coloring';
import { SchemaCssClass } from '../api/css-classes/schema-css-class';
import { SchemaWarehouse } from '../api/schema.warehouse';
import { HermesObservable, HermesSingle } from '@generic-ui/hermes';
export declare class SchemaDomainWarehouse extends SchemaWarehouse {
    private readonly schemaCssClassesRepository;
    private readonly schemaThemeRepository;
    private readonly schemaHorizontalGridRepository;
    private readonly schemaRowColoringRepository;
    private readonly schemaVerticalGridRepository;
    constructor(schemaCssClassesRepository: SchemaCssClassesRepository, schemaThemeRepository: SchemaThemeRepository, schemaHorizontalGridRepository: SchemaHorizontalGridRepository, schemaRowColoringRepository: SchemaRowColoringRepository, schemaVerticalGridRepository: SchemaVerticalGridRepository);
    static readonly services: readonly [typeof SchemaCssClassesRepository, typeof SchemaThemeRepository, typeof SchemaHorizontalGridRepository, typeof SchemaRowColoringRepository, typeof SchemaVerticalGridRepository];
    onTheme(schemaId: SchemaReadModelRootId): HermesObservable<SchemaTheme>;
    onceTheme(schemaId: SchemaReadModelRootId): HermesSingle<SchemaTheme>;
    onHorizontalGrid(schemaId: SchemaReadModelRootId): HermesObservable<boolean>;
    onVerticalGrid(schemaId: SchemaReadModelRootId): HermesObservable<boolean>;
    onRowColoring(schemaId: SchemaReadModelRootId): HermesObservable<SchemaRowColoring>;
    onCssClasses(schemaId: SchemaReadModelRootId): HermesObservable<SchemaCssClass>;
}
