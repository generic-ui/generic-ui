import { Observable } from 'rxjs';
import { VerticalFormationRepository } from './vertical-formation.repository';
import { StructureId } from '../../../core/domain/structure.id';
import { VerticalFormationScrollBarPositionRepository } from '../domain-read/scroll-bar/vertical-formation.scroll-bar-position.repository';
export declare class StructureVerticalFormationWarehouse {
    private readonly verticalFormationRepository;
    private readonly positionRepository;
    constructor(verticalFormationRepository: VerticalFormationRepository, positionRepository: VerticalFormationScrollBarPositionRepository);
    onVerticalScrollEnabled(structureId: StructureId): Observable<boolean>;
    onRowHeight(structureId: StructureId): Observable<number>;
    onContainerHeight(structureId: StructureId): Observable<number>;
    onTopMargin(structureId: StructureId): Observable<number>;
    onScrollBarPosition(structureId?: StructureId): Observable<number>;
}
