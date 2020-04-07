import { Observable } from 'rxjs';
import { DomainEvent, DomainEventBus } from '@generic-ui/hermes';
import { SchemaReadModelRootRepository } from '../../../read/schema.read-model-root-repository';
import { SchemaReadModelRoot } from '../../../read/schema.read-model-root';
import { InMemorySchemaReadModelStore } from './in-memory.schema.read-model-store';
import { SchemaReadModelRootId } from '../../../read/schema.read-model-root-id';
export declare class InMemorySchemaReadModelRootRepository extends SchemaReadModelRootRepository {
    private readonly inMemorySchemaReadModelStore;
    private readonly schemaIdToReadModel;
    private readonly schemaIdToReadModel$;
    constructor(domainEventBus: DomainEventBus, inMemorySchemaReadModelStore: InMemorySchemaReadModelStore);
    on(readModelRootId: SchemaReadModelRootId): Observable<Readonly<SchemaReadModelRoot>>;
    protected forEvents(): Array<typeof DomainEvent>;
    protected subscribe(event: DomainEvent): void;
}
