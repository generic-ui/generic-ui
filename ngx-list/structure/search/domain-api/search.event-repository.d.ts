import { Observable } from 'rxjs';
import { DomainEventBus } from '@generic-ui/hermes';
import { StructureId } from '../../../lib/structure/domain/structure.id';
export declare class SearchEventRepository {
    private readonly domainEventBus;
    constructor(domainEventBus: DomainEventBus);
    onSearchPhrase(structureId: StructureId): Observable<string>;
}
