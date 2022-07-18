import { HermesObservable, HermesSingle, Warehouse } from '@generic-ui/hermes';
import { SchemaTheme } from './theme/schema-theme';
import { SchemaReadModelRootId } from './global/schema.read-model-root-id';
import { SchemaCssClass } from './css-classes/schema-css-class';
import { SchemaRowColoring } from './row-coloring/schema-row-coloring';
import { SchemaRowClass } from './styling/schema.row-class';
import { SchemaRowStyle } from './styling/schema.row-style';
export declare abstract class SchemaWarehouse implements Warehouse {
    abstract onTheme(schemaId: SchemaReadModelRootId): HermesObservable<SchemaTheme>;
    abstract onceTheme(schemaId: SchemaReadModelRootId): HermesSingle<SchemaTheme>;
    abstract onHorizontalGrid(schemaId: SchemaReadModelRootId): HermesObservable<boolean>;
    abstract onVerticalGrid(schemaId: SchemaReadModelRootId): HermesObservable<boolean>;
    abstract onRowColoring(schemaId: SchemaReadModelRootId): HermesObservable<SchemaRowColoring>;
    abstract onCssClasses(schemaId: SchemaReadModelRootId): HermesObservable<SchemaCssClass>;
    abstract onRowClass(schemaId: SchemaReadModelRootId): HermesObservable<SchemaRowClass>;
    abstract onRowStyle(schemaId: SchemaReadModelRootId): HermesObservable<SchemaRowStyle>;
}
