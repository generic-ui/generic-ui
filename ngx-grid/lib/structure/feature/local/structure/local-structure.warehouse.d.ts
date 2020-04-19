import { Observable } from 'rxjs';
import { StructureWarehouse } from '../../../feature-api/structure.warehouse';
import { StructureId } from '../../../domain/structure.id';
import { StructureReadModelRepository } from '../../../feature-api/read/structure.read-model-repository';
import { StructureReadModelRoot } from '../../../feature-api/read/structure.read-model-root';
import { VerticalFormationRepository } from '../../../feature-api/vertical-formation/vertical-formation.repository';
export declare class LocalStructureWarehouse extends StructureWarehouse {
    private structureId;
    constructor(structureId: StructureId, structureRepository: StructureReadModelRepository, verticalFormationRepository: VerticalFormationRepository);
    onStructure(): Observable<StructureReadModelRoot>;
}
