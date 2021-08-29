import { SchemaCssClassesRepository } from './css-classes/schema.css-classes.repository';
import { SchemaThemeRepository } from './theme/schema.theme.repository';
import { SchemaHorizontalGridRepository } from './horizontal-grid/schema.horizontal-grid.repository';
import { SchemaRowColoringRepository } from './row-coloring/schema.row-coloring.repository';
import { SchemaVerticalGridRepository } from './vertical-grid/schema.vertical-grid.repository';
import { SchemaReadModelRootId } from '../api/schema.read-model-root-id';
import { SchemaTheme } from '../api/theme/schema-theme';
import { SchemaRowColoring } from '../api/row-coloring/schema-row-coloring';
import { SchemaCssClass } from '../api/css-classes/schema-css-class';
import { SchemaWarehouse } from '../api/schema.warehouse';
import { Observable } from 'rxjs';
export declare class SchemaDomainWarehouse extends SchemaWarehouse {
    private readonly schemaCssClassesRepository;
    private readonly schemaThemeRepository;
    private readonly schemaHorizontalGridRepository;
    private readonly schemaRowColoringRepository;
    private readonly schemaVerticalGridRepository;
    constructor(schemaCssClassesRepository: SchemaCssClassesRepository, schemaThemeRepository: SchemaThemeRepository, schemaHorizontalGridRepository: SchemaHorizontalGridRepository, schemaRowColoringRepository: SchemaRowColoringRepository, schemaVerticalGridRepository: SchemaVerticalGridRepository);
    onTheme(schemaId?: SchemaReadModelRootId): Observable<SchemaTheme>;
    onSingleTheme(schemaId?: SchemaReadModelRootId): Observable<SchemaTheme>;
    onHorizontalGrid(schemaId?: SchemaReadModelRootId): Observable<boolean>;
    onVerticalGrid(schemaId?: SchemaReadModelRootId): Observable<boolean>;
    onRowColoring(schemaId?: SchemaReadModelRootId): Observable<SchemaRowColoring>;
    onCssClasses(schemaId?: SchemaReadModelRootId): Observable<SchemaCssClass>;
}
