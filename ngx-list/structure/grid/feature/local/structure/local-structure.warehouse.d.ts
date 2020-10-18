import { Observable } from 'rxjs';
import { StructureWarehouse } from '../../../core/api/structure.warehouse';
import { StructureId } from '../../../../core/api/structure.id';
import { StructureReadModelRepository } from '../../../core/domain-read/structure.read-model-repository';
import { StructureReadModelRoot } from '../../../core/domain-read/structure.read-model-root';
export declare class LocalStructureWarehouse extends StructureWarehouse {
    private structureId;
    constructor(structureId: StructureId, structureRepository: StructureReadModelRepository);
    onStructure(): Observable<StructureReadModelRoot>;
}
