import { Observable } from 'rxjs';
import { SchemaTheme } from '../domain/theme/schema-theme';
import { SchemaReadModelRootId } from './read/schema.read-model-root-id';
import { SchemaCssClass } from './css-classes/schema-css-class';
import { SchemaThemeRepository } from './theme/schema.theme.repository';
import { SchemaCssClassesRepository } from './css-classes/schema.css-classes.repository';
import { SchemaRowColoring } from '../domain/coloring/schema-row-coloring';
import { SchemaHorizontalGridRepository } from './horizontal-grid/schema.horizontal-grid.repository';
import { SchemaRowColoringRepository } from './row-coloring/schema.row-coloring.repository';
import { SchemaVerticalGridRepository } from './vertical-grid/schema.vertical-grid.repository';
export declare class SchemaWarehouse {
    private readonly schemaCssClassesRepository;
    private readonly schemaThemeRepository;
    private readonly schemaHorizontalGridRepository;
    private readonly schemaRowColoringRepository;
    private readonly schemaVerticalGridRepository;
    constructor(schemaCssClassesRepository: SchemaCssClassesRepository, schemaThemeRepository: SchemaThemeRepository, schemaHorizontalGridRepository: SchemaHorizontalGridRepository, schemaRowColoringRepository: SchemaRowColoringRepository, schemaVerticalGridRepository: SchemaVerticalGridRepository);
    onTheme(schemaId?: SchemaReadModelRootId): Observable<SchemaTheme>;
    onHorizontalGrid(schemaId?: SchemaReadModelRootId): Observable<boolean>;
    onVerticalGrid(schemaId?: SchemaReadModelRootId): Observable<boolean>;
    onRowColoring(schemaId?: SchemaReadModelRootId): Observable<SchemaRowColoring>;
    onSingleTheme(schemaId?: SchemaReadModelRootId): Observable<SchemaTheme>;
    onCssClasses(schemaId?: SchemaReadModelRootId): Observable<SchemaCssClass>;
}
