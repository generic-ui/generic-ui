import { Observable } from 'rxjs';
import { DomainEventBus, EventRepository } from '@generic-ui/hermes';
import { StructureId } from '../../../core/api/structure.id';
import { StructureReadModelRootId } from '../../../grid/core/api/read/structure.read-model-root-id';
export declare class SearchEventRepository extends EventRepository<StructureReadModelRootId, StructureId> {
    constructor(domainEventBus: DomainEventBus);
    onSearchPhrase(structureId: StructureReadModelRootId): Observable<string>;
}
