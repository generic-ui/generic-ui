import { Observable } from 'rxjs';
import { StructureVerticalFormationWarehouse } from '../../../feature-api/vertical-formation/structure-vertical-formation.warehouse';
import { StructureId } from '../../../domain/structure.id';
import { VerticalFormationRepository } from '../../../feature-api/vertical-formation/vertical-formation.repository';
export declare class LocalStructureVerticalFormationWarehouse extends StructureVerticalFormationWarehouse {
    private readonly structureId;
    constructor(structureId: StructureId, verticalFormationRepository: VerticalFormationRepository);
    onVerticalScrollEnabled(): Observable<boolean>;
    onRowHeight(): Observable<number>;
    onContainerHeight(): Observable<number>;
    onTopMargin(): Observable<number>;
}
