import { DomainEventBus } from '@generic-ui/hermes';
import { SchemaReadModelRootId } from '../api/schema.read-model-root-id';
import { SchemaTheme } from '../api/theme/schema-theme';
import { SchemaRowColoring } from '../api/row-coloring/schema-row-coloring';
import { SchemaEventRepository } from '../api/schema.event-repository';
import { Observable } from 'rxjs';
export declare class SchemaDomainEventRepository extends SchemaEventRepository {
    constructor(domainEventBus: DomainEventBus);
    onThemeChanged(schemaId?: SchemaReadModelRootId): Observable<SchemaTheme>;
    onHorizontalGridChanged(schemaId?: SchemaReadModelRootId): Observable<boolean>;
    onVerticalGridChanged(schemaId?: SchemaReadModelRootId): Observable<boolean>;
    onRowColoring(schemaId?: SchemaReadModelRootId): Observable<SchemaRowColoring>;
}
