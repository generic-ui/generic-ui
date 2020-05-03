import { Observable } from 'rxjs';
import { SchemaReadModelRootId } from '../../../../schema/feature-api/read/schema.read-model-root-id';
import { SchemaTheme } from '../../../../schema/domain/theme/schema-theme';
import { SchemaWarehouse } from '../../../../schema/feature-api/schema.warehouse';
import { SchemaCssClass } from '../../../../schema/feature-api/css-classes/schema-css-class';
import { SchemaCssClassesRepository } from '../../../../schema/feature-api/css-classes/schema.css-classes.repository';
import { SchemaThemeRepository } from '../../../../schema/feature-api/theme/schema.theme.repository';
export declare class LocalSchemaWarehouse extends SchemaWarehouse {
    private readonly schemaReadModelRootId;
    constructor(schemaReadModelRootId: SchemaReadModelRootId, schemaCssClassesRepository: SchemaCssClassesRepository, schemaThemeRepository: SchemaThemeRepository);
    onSingleTheme(): Observable<SchemaTheme>;
    onCssClasses(): Observable<SchemaCssClass>;
}
