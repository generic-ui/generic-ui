import { HermesObservable } from '@generic-ui/hermes';
import { SchemaReadModelRootId } from '../api/global/schema.read-model-root-id';
import { SchemaTheme } from '../api/theme/schema-theme';
import { SchemaRowColoring } from '../api/row-coloring/schema-row-coloring';
import { SchemaEventRepository } from '../api/schema.event-repository';
export declare class SchemaDomainEventRepository extends SchemaEventRepository {
    constructor();
    onThemeChanged(schemaId: SchemaReadModelRootId): HermesObservable<SchemaTheme>;
    onHorizontalGridChanged(schemaId: SchemaReadModelRootId): HermesObservable<boolean>;
    onVerticalGridChanged(schemaId: SchemaReadModelRootId): HermesObservable<boolean>;
    onRowColoring(schemaId: SchemaReadModelRootId): HermesObservable<SchemaRowColoring>;
}
