import { Observable } from 'rxjs';
import { AggregateId, Warehouse } from '@generic-ui/hermes';
import { StructureReadModelRepository } from '../../../grid/core/api/read/structure.read-model-repository';
import { StructureReadModelRoot } from '../../../grid/core/api/read/structure.read-model-root';
export declare class SortingWarehouse implements Warehouse {
    private readonly structureRepository;
    constructor(structureRepository: StructureReadModelRepository);
    onStructure(aggregateId?: AggregateId): Observable<StructureReadModelRoot>;
}
