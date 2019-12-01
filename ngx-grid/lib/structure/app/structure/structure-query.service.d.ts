import { Observable } from 'rxjs';
import { AggregateId } from '@generic-ui/hermes';
import { StructureRepository } from '../../domain/structure/query/structure.repository';
import { Structure } from '../../domain/structure/query/structure';
export declare class StructureQueryService {
    private structureRepository;
    constructor(structureRepository: StructureRepository);
    select(aggregateId?: AggregateId): Observable<Structure>;
    selectVerticalScrollEnabled(aggregateId?: AggregateId): Observable<boolean>;
}
