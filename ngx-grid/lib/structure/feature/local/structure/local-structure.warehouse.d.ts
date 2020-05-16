import { Observable } from 'rxjs';
import { StructureWarehouse } from '../../../domain-api/structure.warehouse';
import { StructureId } from '../../../domain/structure.id';
import { StructureReadModelRepository } from '../../../domain-api/read/structure.read-model-repository';
import { StructureReadModelRoot } from '../../../domain-api/read/structure.read-model-root';
import { VerticalFormationRepository } from '../../../domain-api/vertical-formation/vertical-formation.repository';
export declare class LocalStructureWarehouse extends StructureWarehouse {
    private structureId;
    constructor(structureId: StructureId, structureRepository: StructureReadModelRepository, verticalFormationRepository: VerticalFormationRepository);
    onStructure(): Observable<StructureReadModelRoot>;
}
