import { Observable } from 'rxjs';
import { SchemaReadModelRootId } from '../../../../../schema/core/api/schema.read-model-root-id';
import { SchemaTheme } from '../../../../../schema/core/api/theme/schema-theme';
import { SchemaCssClass } from '../../../../../schema/core/api/css-classes/schema-css-class';
import { SchemaCssClassesRepository } from '../../../../../schema/core/domain-read/css-classes/schema.css-classes.repository';
import { SchemaThemeRepository } from '../../../../../schema/core/domain-read/theme/schema.theme.repository';
import { SchemaHorizontalGridRepository } from '../../../../../schema/core/domain-read/horizontal-grid/schema.horizontal-grid.repository';
import { SchemaRowColoringRepository } from '../../../../../schema/core/domain-read/row-coloring/schema.row-coloring.repository';
import { SchemaVerticalGridRepository } from '../../../../../schema/core/domain-read/vertical-grid/schema.vertical-grid.repository';
import { SchemaRowColoring } from '../../../../../schema/core/api/row-coloring/schema-row-coloring';
import { SchemaDomainWarehouse } from '../../../../../schema/core/domain-read/schema.domain-warehouse';
export declare class LocalSchemaWarehouse extends SchemaDomainWarehouse {
    private readonly schemaReadModelRootId;
    constructor(schemaReadModelRootId: SchemaReadModelRootId, schemaCssClassesRepository: SchemaCssClassesRepository, schemaThemeRepository: SchemaThemeRepository, schemaHorizontalGridRepository: SchemaHorizontalGridRepository, schemaRowColoringRepository: SchemaRowColoringRepository, schemaVerticalGridRepository: SchemaVerticalGridRepository);
    onTheme(): Observable<SchemaTheme>;
    onSingleTheme(): Observable<SchemaTheme>;
    onHorizontalGrid(): Observable<boolean>;
    onVerticalGrid(): Observable<boolean>;
    onRowColoring(): Observable<SchemaRowColoring>;
    onCssClasses(): Observable<SchemaCssClass>;
}
