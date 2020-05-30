import { Observable } from 'rxjs';
import { SchemaReadModelRootId } from '../../../../../schema/domain-api/read/schema.read-model-root-id';
import { SchemaTheme } from '../../../../../schema/domain/theme/schema-theme';
import { SchemaWarehouse } from '../../../../../schema/domain-api/schema.warehouse';
import { SchemaCssClass } from '../../../../../schema/domain-api/css-classes/schema-css-class';
import { SchemaCssClassesRepository } from '../../../../../schema/domain-api/css-classes/schema.css-classes.repository';
import { SchemaThemeRepository } from '../../../../../schema/domain-api/theme/schema.theme.repository';
import { SchemaHorizontalGridRepository } from '../../../../../schema/domain-api/horizontal-grid/schema.horizontal-grid.repository';
import { SchemaRowColoringRepository } from '../../../../../schema/domain-api/row-coloring/schema.row-coloring.repository';
import { SchemaVerticalGridRepository } from '../../../../../schema/domain-api/vertical-grid/schema.vertical-grid.repository';
import { SchemaRowColoring } from '../../../../../schema/domain/coloring/schema-row-coloring';
export declare class LocalSchemaWarehouse extends SchemaWarehouse {
    private readonly schemaReadModelRootId;
    constructor(schemaReadModelRootId: SchemaReadModelRootId, schemaCssClassesRepository: SchemaCssClassesRepository, schemaThemeRepository: SchemaThemeRepository, schemaHorizontalGridRepository: SchemaHorizontalGridRepository, schemaRowColoringRepository: SchemaRowColoringRepository, schemaVerticalGridRepository: SchemaVerticalGridRepository);
    onSingleTheme(): Observable<SchemaTheme>;
    onTheme(): Observable<SchemaTheme>;
    onHorizontalGrid(): Observable<boolean>;
    onVerticalGrid(): Observable<boolean>;
    onRowColoring(): Observable<SchemaRowColoring>;
    onCssClasses(): Observable<SchemaCssClass>;
}
