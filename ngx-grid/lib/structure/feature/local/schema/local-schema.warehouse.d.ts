import { Observable } from 'rxjs';
import { SchemaReadModelRootId } from '../../../../../schema/domain-api/read/schema.read-model-root-id';
import { SchemaTheme } from '../../../../../schema/domain/theme/schema-theme';
import { SchemaWarehouse } from '../../../../../schema/domain-api/schema.warehouse';
import { SchemaCssClass } from '../../../../../schema/domain-api/css-classes/schema-css-class';
import { SchemaCssClassesRepository } from '../../../../../schema/domain-api/css-classes/schema.css-classes.repository';
import { SchemaThemeRepository } from '../../../../../schema/domain-api/theme/schema.theme.repository';
export declare class LocalSchemaWarehouse extends SchemaWarehouse {
    private readonly schemaReadModelRootId;
    constructor(schemaReadModelRootId: SchemaReadModelRootId, schemaCssClassesRepository: SchemaCssClassesRepository, schemaThemeRepository: SchemaThemeRepository);
    onSingleTheme(): Observable<SchemaTheme>;
    onCssClasses(): Observable<SchemaCssClass>;
}
