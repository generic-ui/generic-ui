import { Observable } from 'rxjs';
import { Warehouse } from '@generic-ui/hermes';
import { SchemaTheme } from './theme/schema-theme';
import { SchemaReadModelRootId } from './schema.read-model-root-id';
import { SchemaCssClass } from './css-classes/schema-css-class';
import { SchemaRowColoring } from './row-coloring/schema-row-coloring';
export declare abstract class SchemaWarehouse implements Warehouse {
    abstract onTheme(schemaId?: SchemaReadModelRootId): Observable<SchemaTheme>;
    abstract onSingleTheme(schemaId?: SchemaReadModelRootId): Observable<SchemaTheme>;
    abstract onHorizontalGrid(schemaId?: SchemaReadModelRootId): Observable<boolean>;
    abstract onVerticalGrid(schemaId?: SchemaReadModelRootId): Observable<boolean>;
    abstract onRowColoring(schemaId?: SchemaReadModelRootId): Observable<SchemaRowColoring>;
    abstract onCssClasses(schemaId?: SchemaReadModelRootId): Observable<SchemaCssClass>;
}
