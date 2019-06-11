import { Observable } from 'rxjs';
import { Origin } from 'structure/domain/origin/query/origin';
import { StructureRepository } from 'structure/domain/structure/query/structure.repository';
import { AggregateId } from 'generic-ui-cqrs';
export declare class OriginRepository {
    private structureRepository;
    constructor(structureRepository: StructureRepository);
    select(aggregateId: AggregateId): Observable<Origin>;
}
