import { StructureReadModelRepository } from '../../../lib/structure/domain-api/read/structure.read-model-repository';
import { AggregateId } from '@generic-ui/hermes';
import { StructureReadModelRoot } from '../../../lib/structure/domain-api/read/structure.read-model-root';
import { Observable } from 'rxjs';
export declare class SortingWarehouse {
    private readonly structureRepository;
    constructor(structureRepository: StructureReadModelRepository);
    onStructure(aggregateId?: AggregateId): Observable<StructureReadModelRoot>;
}
