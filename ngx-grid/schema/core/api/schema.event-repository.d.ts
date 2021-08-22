import { Observable } from 'rxjs';
import { DomainEventBus, EventRepository } from '@generic-ui/hermes';
import { SchemaReadModelRootId } from './schema.read-model-root-id';
import { SchemaTheme } from './theme/schema-theme';
import { SchemaRowColoring } from './row-coloring/schema-row-coloring';
import { SchemaId } from '../domain/schema.id';
export declare abstract class SchemaEventRepository extends EventRepository<SchemaReadModelRootId, SchemaId> {
    protected constructor(domainEventBus: DomainEventBus);
    abstract onThemeChanged(schemaId: SchemaReadModelRootId): Observable<SchemaTheme>;
    abstract onHorizontalGridChanged(schemaId: SchemaReadModelRootId): Observable<boolean>;
    abstract onVerticalGridChanged(schemaId: SchemaReadModelRootId): Observable<boolean>;
    abstract onRowColoring(schemaId: SchemaReadModelRootId): Observable<SchemaRowColoring>;
}
