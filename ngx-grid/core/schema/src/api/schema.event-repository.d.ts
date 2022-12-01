import { EventRepository, HermesObservable } from '@generic-ui/hermes';
import { SchemaReadModelRootId } from './global/schema.read-model-root-id';
import { SchemaTheme } from './theme/schema-theme';
import { SchemaRowColoring } from './row-coloring/schema-row-coloring';
export declare abstract class SchemaEventRepository extends EventRepository<SchemaReadModelRootId> {
    protected constructor();
    abstract onThemeChanged(schemaId: SchemaReadModelRootId): HermesObservable<SchemaTheme>;
    abstract onHorizontalGridChanged(schemaId: SchemaReadModelRootId): HermesObservable<boolean>;
    abstract onVerticalGridChanged(schemaId: SchemaReadModelRootId): HermesObservable<boolean>;
    abstract onRowColoring(schemaId: SchemaReadModelRootId): HermesObservable<SchemaRowColoring>;
}
