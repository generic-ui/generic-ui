import { Observable } from 'rxjs';
import { AggregateId } from '@generic-ui/hermes';
import { StructureRepository } from '../../domain/structure/read/structure.repository';
import { Structure } from '../../domain/structure/read/structure';
import { VerticalFormationRepository } from '../../domain/structure/read/vertical-formation/vertical-formation.repository';
export declare class StructureReadModelService {
    private structureRepository;
    private verticalFormationRepository;
    constructor(structureRepository: StructureRepository, verticalFormationRepository: VerticalFormationRepository);
    onStructure(aggregateId?: AggregateId): Observable<Structure>;
    onVerticalScrollEnabled(aggregateId?: AggregateId): Observable<boolean>;
    onRowHeight(aggregateId?: AggregateId): Observable<number>;
}
