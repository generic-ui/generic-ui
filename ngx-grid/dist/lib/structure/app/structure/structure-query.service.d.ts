import { Observable } from 'rxjs';
import { Structure } from 'structure/domain/structure/query/structure';
import { StructureRepository } from 'structure/domain/structure/query/structure.repository';
import { AggregateId } from 'generic-ui-cqrs';
export declare class StructureQueryService {
    private structureRepository;
    constructor(structureRepository: StructureRepository);
    select(aggregateId?: AggregateId): Observable<Structure>;
}
