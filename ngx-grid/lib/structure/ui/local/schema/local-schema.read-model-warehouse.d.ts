import { Observable } from 'rxjs';
import { SchemaReadModelRootRepository } from '../../../../schema/read/schema.read-model-root-repository';
import { SchemaReadModelRootId } from '../../../../schema/read/schema.read-model-root-id';
import { SchemaTheme } from '../../../../schema/domain/schema-theme';
import { SchemaReadModelWarehouse } from '../../../../schema/ui-api/schema.read-model-warehouse';
import { SchemaCssClass } from '../../../../schema/read/schema-css-class';
export declare class LocalSchemaReadModelWarehouse extends SchemaReadModelWarehouse {
    private readonly schemaReadModelRootId;
    constructor(schemaReadModelRootId: SchemaReadModelRootId, schemaReadModelRootRepository: SchemaReadModelRootRepository);
    onSingleTheme(): Observable<SchemaTheme>;
    onCssClasses(): Observable<SchemaCssClass>;
}
