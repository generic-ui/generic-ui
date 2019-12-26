import { Observable } from 'rxjs';
import { AggregateId } from '@generic-ui/hermes';
import { StructureRepository } from '../../domain/structure/read/structure.repository';
import { Structure } from '../../domain/structure/read/structure';
export declare class StructureReadModelService {
    private structureRepository;
    constructor(structureRepository: StructureRepository);
    onStructure(aggregateId?: AggregateId): Observable<Structure>;
    onVerticalScrollEnabled(aggregateId?: AggregateId): Observable<boolean>;
}
