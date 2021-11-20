import { HermesObservable, HermesSingle, Warehouse } from '@generic-ui/hermes';
import { SchemaTheme } from './theme/schema-theme';
import { SchemaReadModelRootId } from './schema.read-model-root-id';
import { SchemaCssClass } from './css-classes/schema-css-class';
import { SchemaRowColoring } from './row-coloring/schema-row-coloring';
export declare abstract class SchemaWarehouse implements Warehouse {
    abstract onTheme(schemaId: SchemaReadModelRootId): HermesObservable<SchemaTheme>;
    abstract onceTheme(schemaId: SchemaReadModelRootId): HermesSingle<SchemaTheme>;
    abstract onHorizontalGrid(schemaId: SchemaReadModelRootId): HermesObservable<boolean>;
    abstract onVerticalGrid(schemaId: SchemaReadModelRootId): HermesObservable<boolean>;
    abstract onRowColoring(schemaId: SchemaReadModelRootId): HermesObservable<SchemaRowColoring>;
    abstract onCssClasses(schemaId: SchemaReadModelRootId): HermesObservable<SchemaCssClass>;
}
