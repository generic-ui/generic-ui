import { Observable } from 'rxjs';
import { DomainEventBus, ReadModelRootRepository } from '@generic-ui/hermes';
import { SchemaReadModelRoot } from './schema.read-model-root';
import { SchemaReadModelRootId } from './schema.read-model-root-id';
export declare abstract class SchemaReadModelRootRepository extends ReadModelRootRepository {
    protected constructor(domainEventBus: DomainEventBus);
    abstract on(readModelRootId: SchemaReadModelRootId): Observable<Readonly<SchemaReadModelRoot>>;
}
