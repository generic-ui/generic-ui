import { Observable } from 'rxjs';
import { StructureReadModelWarehouse } from '../../../ui-api/structure/structure.read-model-warehouse';
import { StructureId } from '../../../domain/structure.id';
import { StructureReadModelRepository } from '../../../read/structure/structure.read-model-repository';
import { StructureReadModelRoot } from '../../../read/structure/structure.read-model-root';
import { VerticalFormationRepository } from '../../../read/structure/vertical-formation/vertical-formation.repository';
export declare class LocalStructureReadModelWarehouse extends StructureReadModelWarehouse {
    private structureId;
    constructor(structureId: StructureId, structureRepository: StructureReadModelRepository, verticalFormationRepository: VerticalFormationRepository);
    onStructure(): Observable<StructureReadModelRoot>;
    onVerticalScrollEnabled(): Observable<boolean>;
    onContainerHeight(): Observable<number>;
    onRowHeight(): Observable<number>;
}
