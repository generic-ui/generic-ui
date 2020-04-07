import { Observable } from 'rxjs';
import { AggregateId } from '@generic-ui/hermes';
import { StructureReadModelRepository } from '../../read/structure/structure.read-model-repository';
import { StructureReadModelRoot } from '../../read/structure/structure.read-model-root';
import { VerticalFormationRepository } from '../../read/structure/vertical-formation/vertical-formation.repository';
export declare class StructureReadModelWarehouse {
    private structureRepository;
    private verticalFormationRepository;
    constructor(structureRepository: StructureReadModelRepository, verticalFormationRepository: VerticalFormationRepository);
    onStructure(aggregateId?: AggregateId): Observable<StructureReadModelRoot>;
    onVerticalScrollEnabled(aggregateId?: AggregateId): Observable<boolean>;
    onContainerHeight(aggregateId?: AggregateId): Observable<number>;
    onRowHeight(aggregateId?: AggregateId): Observable<number>;
}
