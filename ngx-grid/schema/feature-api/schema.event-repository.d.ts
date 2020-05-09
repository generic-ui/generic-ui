import { Observable } from 'rxjs';
import { DomainEventBus, EventRepository } from '@generic-ui/hermes';
import { SchemaReadModelRootId } from './read/schema.read-model-root-id';
import { SchemaTheme } from '../domain/theme/schema-theme';
import { SchemaRowColoring } from '../domain/coloring/schema-row-coloring';
import { SchemaId } from '../domain/schema.id';
export declare class SchemaEventRepository extends EventRepository<SchemaReadModelRootId, SchemaId> {
    constructor(domainEventBus: DomainEventBus);
    onThemeChanged(schemaId?: SchemaReadModelRootId): Observable<SchemaTheme>;
    onHorizontalGridChanged(schemaId?: SchemaReadModelRootId): Observable<boolean>;
    onVerticalGridChanged(schemaId?: SchemaReadModelRootId): Observable<boolean>;
    onRowColoring(schemaId?: SchemaReadModelRootId): Observable<SchemaRowColoring>;
}
