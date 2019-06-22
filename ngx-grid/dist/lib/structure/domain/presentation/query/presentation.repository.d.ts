import { Observable } from 'rxjs';
import { Presentation } from 'structure/domain/presentation/query/presentation';
import { StructureRepository } from 'structure/domain/structure/query/structure.repository';
import { AggregateId } from 'generic-ui-cqrs';
export declare class PresentationRepository {
    private structureRepository;
    constructor(structureRepository: StructureRepository);
    select(aggregateId: AggregateId): Observable<Presentation>;
}
