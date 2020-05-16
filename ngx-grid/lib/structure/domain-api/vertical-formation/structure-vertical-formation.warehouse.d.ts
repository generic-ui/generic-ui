import { Observable } from 'rxjs';
import { VerticalFormationRepository } from './vertical-formation.repository';
import { StructureId } from '../../domain/structure.id';
export declare class StructureVerticalFormationWarehouse {
    private verticalFormationRepository;
    constructor(verticalFormationRepository: VerticalFormationRepository);
    onVerticalScrollEnabled(structureId: StructureId): Observable<boolean>;
    onRowHeight(structureId: StructureId): Observable<number>;
    onContainerHeight(structureId: StructureId): Observable<number>;
    onTopMargin(structureId: StructureId): Observable<number>;
}
