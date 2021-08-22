import { Observable } from 'rxjs';
import { StructureVerticalFormationWarehouse } from '../../../../vertical-formation/core/api/structure-vertical-formation.warehouse';
import { StructureId } from '../../../../core/domain/structure.id';
import { VerticalFormationRepository } from '../../../../vertical-formation/core/api/vertical-formation.repository';
import { VerticalFormationScrollBarPositionRepository } from '../../../../vertical-formation/core/domain-read/scroll-bar/vertical-formation.scroll-bar-position.repository';
export declare class LocalStructureVerticalFormationWarehouse extends StructureVerticalFormationWarehouse {
    private readonly structureId;
    constructor(structureId: StructureId, verticalFormationRepository: VerticalFormationRepository, positionRepository: VerticalFormationScrollBarPositionRepository);
    onVerticalScrollEnabled(): Observable<boolean>;
    onRowHeight(): Observable<number>;
    onContainerHeight(): Observable<number>;
    onTopMargin(): Observable<number>;
    onScrollBarPosition(): Observable<number>;
}
