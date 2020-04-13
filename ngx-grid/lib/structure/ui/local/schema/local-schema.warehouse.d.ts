import { Observable } from 'rxjs';
import { SchemaReadModelRootId } from '../../../../schema/read/schema.read-model-root-id';
import { SchemaTheme } from '../../../../schema/domain/schema-theme';
import { SchemaWarehouse } from '../../../../schema/ui-api/schema.warehouse';
import { SchemaCssClass } from '../../../../schema/read/schema-css-class';
import { SchemaCssClassesRepository } from '../../../../schema/read/css-classes/schema.css-classes.repository';
import { SchemaThemeRepository } from '../../../../schema/read/theme/schema.theme.repository';
export declare class LocalSchemaWarehouse extends SchemaWarehouse {
    private readonly schemaReadModelRootId;
    constructor(schemaReadModelRootId: SchemaReadModelRootId, schemaCssClassesRepository: SchemaCssClassesRepository, schemaThemeRepository: SchemaThemeRepository);
    onSingleTheme(): Observable<SchemaTheme>;
    onCssClasses(): Observable<SchemaCssClass>;
}
