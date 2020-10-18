import { Observable } from 'rxjs';
import { Warehouse } from '@generic-ui/hermes';
import { SchemaTheme } from './schema-theme';
import { SchemaReadModelRootId } from '../domain-read/schema.read-model-root-id';
import { SchemaCssClass } from './css-classes/schema-css-class';
import { SchemaThemeRepository } from '../domain-read/theme/schema.theme.repository';
import { SchemaCssClassesRepository } from '../domain-read/css-classes/schema.css-classes.repository';
import { SchemaRowColoring } from './schema-row-coloring';
import { SchemaHorizontalGridRepository } from '../domain-read/horizontal-grid/schema.horizontal-grid.repository';
import { SchemaRowColoringRepository } from '../domain-read/row-coloring/schema.row-coloring.repository';
import { SchemaVerticalGridRepository } from '../domain-read/vertical-grid/schema.vertical-grid.repository';
export declare class SchemaWarehouse implements Warehouse {
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
