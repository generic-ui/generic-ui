import { Observable } from 'rxjs';
import { DomainEventBus, EventRepository } from '@generic-ui/hermes';
import { SchemaReadModelRootId } from '../domain-read/schema.read-model-root-id';
import { SchemaTheme } from './schema-theme';
import { SchemaRowColoring } from './schema-row-coloring';
import { SchemaId } from './schema.id';
export declare class SchemaEventRepository extends EventRepository<SchemaReadModelRootId, SchemaId> {
    constructor(domainEventBus: DomainEventBus);
    onThemeChanged(schemaId?: SchemaReadModelRootId): Observable<SchemaTheme>;
    onHorizontalGridChanged(schemaId?: SchemaReadModelRootId): Observable<boolean>;
    onVerticalGridChanged(schemaId?: SchemaReadModelRootId): Observable<boolean>;
    onRowColoring(schemaId?: SchemaReadModelRootId): Observable<SchemaRowColoring>;
}
