import { Observable } from 'rxjs';
import { StructureWarehouse } from '../../../ui-api/structure.warehouse';
import { StructureId } from '../../../domain/structure.id';
import { StructureReadModelRepository } from '../../../read/structure/structure.read-model-repository';
import { StructureReadModelRoot } from '../../../read/structure/structure.read-model-root';
import { VerticalFormationRepository } from '../../../read/structure/vertical-formation/vertical-formation.repository';
export declare class LocalStructureWarehouse extends StructureWarehouse {
    private structureId;
    constructor(structureId: StructureId, structureRepository: StructureReadModelRepository, verticalFormationRepository: VerticalFormationRepository);
    onStructure(): Observable<StructureReadModelRoot>;
}
