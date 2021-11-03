import { HermesObservable, Warehouse } from '@generic-ui/hermes';
import { SchemaTheme } from './theme/schema-theme';
import { SchemaReadModelRootId } from './schema.read-model-root-id';
import { SchemaCssClass } from './css-classes/schema-css-class';
import { SchemaRowColoring } from './row-coloring/schema-row-coloring';
import * as i0 from "@angular/core";
export declare abstract class SchemaWarehouse implements Warehouse {
    abstract onTheme(schemaId: SchemaReadModelRootId): HermesObservable<SchemaTheme>;
    abstract onceTheme(schemaId: SchemaReadModelRootId): HermesObservable<SchemaTheme>;
    abstract onHorizontalGrid(schemaId: SchemaReadModelRootId): HermesObservable<boolean>;
    abstract onVerticalGrid(schemaId: SchemaReadModelRootId): HermesObservable<boolean>;
    abstract onRowColoring(schemaId: SchemaReadModelRootId): HermesObservable<SchemaRowColoring>;
    abstract onCssClasses(schemaId: SchemaReadModelRootId): HermesObservable<SchemaCssClass>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SchemaWarehouse, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SchemaWarehouse>;
}
//# sourceMappingURL=schema.warehouse.d.ts.map