import { Observable } from 'rxjs';
import { StructureWarehouse } from '../../../core/api/structure.warehouse';
import { StructureId } from '../../../../core/domain/structure.id';
import { StructureReadModelRepository } from '../../../core/api/read/structure.read-model-repository';
import { StructureReadModelRoot } from '../../../core/api/read/structure.read-model-root';
export declare class LocalStructureWarehouse extends StructureWarehouse {
    private structureId;
    constructor(structureId: StructureId, structureRepository: StructureReadModelRepository);
    onStructure(): Observable<StructureReadModelRoot>;
}
